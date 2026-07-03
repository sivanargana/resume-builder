import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Trash } from "lucide-react";
import { useContent } from "@/components/ContentProvider";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function _Form({ openDialog, setOpenDialog, onSave, onDelete, type, selected }: any) {
  const { masterdata, years, team }: any = useContent();
  const defaultValues: any & {
    isCurrentEmployment: string;
  } = {
    title: "",
    client: "",
    status: "",
    startYear: "",
    endYear: "",
    details: "",
    location: "",
    site: "",
    employmentTypeId: "",
    teamSize: "",
    role: "",
    roleDescription: "",
    skillsUsed: "",
  };

  const form = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (type == "create") {
      form.reset(defaultValues);
    }
    if (type == "update") {
      form.reset(selected);
    }
  }, [type, openDialog]);

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="min-w-150">
          <DialogHeader>
            <DialogTitle>Project</DialogTitle>
          </DialogHeader>

          <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
            <FieldSet>
              <FieldGroup>
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
                <Controller
                  name="client"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Client</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />

                <Controller
                  name="status"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel>Status</FieldLabel>
                      <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} className="flex gap-5 w-fit" aria-invalid={fieldState.invalid}>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="INPROGRESS" id="InProgress" />
                          <Label htmlFor="InProgress">In Progress</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="COMPLETED" id="Completed" />
                          <Label htmlFor="Completed">Completed</Label>
                        </div>
                      </RadioGroup>
                    </Field>
                  )}
                />

                <Controller
                  name="startYear"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Start Year</FieldLabel>
                      <Select name={field.name} value={field.value} onValueChange={field.onChange} aria-invalid={fieldState.invalid}>
                        <SelectTrigger id={field.name} className="w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {years.map((item: any) => (
                              <SelectItem value={item} key={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  )}
                />
                <Controller
                  name="endYear"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>End Year</FieldLabel>
                      <Select name={field.name} value={field.value} onValueChange={field.onChange} aria-invalid={fieldState.invalid}>
                        <SelectTrigger id={field.name} className="w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {years.map((item: any) => (
                              <SelectItem value={item} key={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  )}
                />

                <Controller
                  name="details"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Details</FieldLabel>
                      <Textarea {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />

                <Controller
                  name="location"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Location</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />

                <Controller
                  name="site"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Site</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />

                <Controller
                  name="employmentTypeId"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel>Employment type</FieldLabel>
                      <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} className="flex gap-5 w-fit" aria-invalid={fieldState.invalid}>
                        {masterdata?.data?.employmentType.map((item: any) => (
                          <div className="flex items-center gap-3" key={item.id}>
                            <RadioGroupItem value={item.id} id={item.name} />
                            <Label htmlFor={item.name}>{item.name}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </Field>
                  )}
                />

                <Controller
                  name="teamSize"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Team Size</FieldLabel>
                      <Select name={field.name} value={field.value} onValueChange={field.onChange} aria-invalid={fieldState.invalid}>
                        <SelectTrigger id={field.name} className="w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {team.map((item: any) => (
                              <SelectItem value={item} key={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  )}
                />

                <Controller
                  name="role"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Role</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />

                <Controller
                  name="roleDescription"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Role Description</FieldLabel>
                      <Textarea {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />

                <Controller
                  name="skillsUsed"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Skills Used</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
              </FieldGroup>
            </FieldSet>
          </div>

          <DialogFooter>
            {type == "update" && (
              <Button variant="destructive" className="mr-auto" onClick={() => onDelete()}>
                <Trash />
              </Button>
            )}
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={!form?.formState?.isDirty} onClick={() => onSave(form.getValues())}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
