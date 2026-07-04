import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Trash } from "lucide-react";
import { useContent } from "@/components/ContentProvider";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FEATURE } from "./constants";

export function _Form({ openDialog, setOpenDialog, onSave, onUpdate, onDelete, type, selected }: any) {
  const { masterdata, years }: any = useContent();
  const defaultValues: any & {
    isCurrentEmployment: string;
  } = {
    educationTypeId: "",
    university: "",
    course: "",
    specialization: "",
    startYear: "",
    endYear: "",
    gradeSystem: "",
    marks: "",
  };

  const form = useForm({
    defaultValues,
    mode: "onTouched",
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
            <DialogTitle>{FEATURE}</DialogTitle>
          </DialogHeader>

          <FieldSet>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Controller
                  name="educationTypeId"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Education</FieldLabel>
                      <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id={field.name} className="w-full" aria-invalid={fieldState.invalid}>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {masterdata?.data?.educationType.map((item: any) => (
                              <SelectItem value={item.id} key={item.id}>
                                {item.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  )}
                />

                <Controller
                  name="university"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>University</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Controller
                  name="course"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Course</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
                <Controller
                  name="specialization"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Specialization</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Controller
                  name="startYear"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Start Year</FieldLabel>
                      <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id={field.name} className="w-full" aria-invalid={fieldState.invalid}>
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
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>End Year</FieldLabel>
                      <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id={field.name} className="w-full" aria-invalid={fieldState.invalid}>
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
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Controller
                  name="gradeSystem"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Grade System</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
                <Controller
                  name="marks"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Marks</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
              </div>
            </FieldGroup>
          </FieldSet>
          <DialogFooter>
            {type == "update" && (
              <Button variant="destructive" className="mr-auto" onClick={() => onDelete()}>
                <Trash />
              </Button>
            )}
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            {type == "create" && (
              <Button
                disabled={!form?.formState?.isDirty || !form?.formState?.isValid}
                onClick={() => {
                  if (form.formState.isValid) {
                    onSave(form.getValues());
                  } else {
                    form.trigger();
                  }
                }}
              >
                Save
              </Button>
            )}
            {type == "update" && (
              <Button
                disabled={!form?.formState?.isDirty || !form?.formState?.isValid}
                onClick={() => {
                  if (form.formState.isValid) {
                    onUpdate(form.getValues());
                  } else {
                    form.trigger();
                  }
                }}
              >
                Save
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
