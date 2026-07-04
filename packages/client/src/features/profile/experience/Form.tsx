import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Trash } from "lucide-react";
import { useContent } from "@/components/ContentProvider";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FEATURE } from "./constants";

export function _Form({ openDialog, setOpenDialog, onSave, onUpdate, onDelete, type, selected }: any) {
  const { masterdata, years }: any = useContent();
  const defaultValues: any & {
    isCurrentEmployment: string;
  } = {
    employmentTypeId: "",
    isCurrentEmployment: "false",
    companyName: "",
    jobTitle: "",
    joiningDate: "",
    workedTill: "",
    jobProfile: "",
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
      form.reset({
        employmentTypeId: selected.employmentTypeId,
        isCurrentEmployment: selected.isCurrentEmployment ? "true" : "false",
        companyName: selected.companyName,
        jobTitle: selected.jobTitle,
        joiningDate: selected.joiningDate,
        workedTill: selected.workedTill ?? "",
        jobProfile: selected.jobProfile,
      });
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
              <Controller
                name="isCurrentEmployment"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Is this your current employment?</FieldLabel>
                    <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} className="flex gap-5 w-fit">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="true" id="yes" aria-invalid={fieldState.invalid} />
                        <Label htmlFor="yes">Yes</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="false" id="no" />
                        <Label htmlFor="no">No</Label>
                      </div>
                    </RadioGroup>
                  </Field>
                )}
              />
              <Controller
                name="employmentTypeId"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Employment type</FieldLabel>
                    <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} className="flex gap-5 w-fit">
                      {masterdata?.data?.employmentType.map((item: any) => (
                        <div className="flex items-center gap-3" key={item.id}>
                          <RadioGroupItem value={item.id} id={item.name} aria-invalid={fieldState.invalid} />
                          <Label htmlFor={item.name}>{item.name}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </Field>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <Controller
                  name="companyName"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Current company name</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
                <Controller
                  name="jobTitle"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Job Title</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Controller
                  name="joiningDate"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Joining Date</FieldLabel>
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
                  name="workedTill"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Worked Till</FieldLabel>

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

              <Controller
                name="jobProfile"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Job Profile</FieldLabel>
                    <Textarea {...field} id={field.name} aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />
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
