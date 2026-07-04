import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Trash } from "lucide-react";
import { FEATURE } from "./constants";
import type { CreateRequest } from "./types";

export function _Form({ input, masterdata, openDialog, setOpenDialog, onSave, onUpdate, onDelete, type }: any) {
  const defaultValues: CreateRequest["data"] = {
    experienceYearId: "",
    experienceMonthId: "",
    salaryBreakdownId: "",
    availabilityTypeId: "",
    salaryAmount: "",
    country: "",
    location: "",
  };
  const form = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (type == "create") {
      form.reset(defaultValues);
    }
    if (type == "update") {
      form.reset({
        experienceYearId: input?.basicDetails?.experienceYear.id,
        experienceMonthId: input?.basicDetails?.experienceMonth.id,
        salaryBreakdownId: input?.basicDetails?.salaryBreakdown.id,
        availabilityTypeId: input?.basicDetails?.availabilityType.id,
        salaryAmount: input?.basicDetails?.salaryAmount,
        country: input?.basicDetails?.country,
        location: input?.basicDetails?.location,
      });
    }
  }, [type, openDialog, input]);

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="min-w-150">
          <DialogHeader>
            <DialogTitle>{FEATURE}</DialogTitle>
          </DialogHeader>

          <FieldSet>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Controller
                    name="experienceYearId"
                    control={form.control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Years</FieldLabel>
                        <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger id={field.name} className="w-full" aria-invalid={fieldState.invalid}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {masterdata?.data?.experienceYear.map((item: any) => (
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
                </div>
                <div>
                  <Controller
                    name="experienceMonthId"
                    control={form.control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Months</FieldLabel>
                        <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger id={field.name} className="w-full" aria-invalid={fieldState.invalid}>
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {masterdata?.data?.experienceMonth.map((item: any) => (
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
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Controller
                    name="salaryAmount"
                    control={form.control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Current salary</FieldLabel>
                        <Input {...field} onChange={field.onChange} id={field.name} aria-invalid={fieldState.invalid} />
                      </Field>
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="salaryBreakdownId"
                    control={form.control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Salary breakdown</FieldLabel>
                        <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger id={field.name} className="w-full" aria-invalid={fieldState.invalid}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {masterdata?.data?.salaryBreakdown.map((item: any) => (
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
                </div>
              </div>

              <Controller
                name="country"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Country</FieldLabel>
                    <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} className="flex gap-5 w-fit">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="India" id="India" aria-invalid={fieldState.invalid} />
                        <Label htmlFor="India">India</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="OutsideIndia" id="OutsideIndia" aria-invalid={fieldState.invalid} />
                        <Label htmlFor="OutsideIndia">Outside India</Label>
                      </div>
                    </RadioGroup>
                  </Field>
                )}
              />

              <Controller
                name="location"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Location</FieldLabel>
                    <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />

              <Controller
                name="availabilityTypeId"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Availability to join</FieldLabel>
                    <ToggleGroup value={field.value} onValueChange={field.onChange} type="single" variant="outline">
                      {masterdata?.data?.availabilityType.map((item: any) => (
                        <ToggleGroupItem value={item.id} key={item.id} aria-invalid={fieldState.invalid}>
                          {item.name}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>
          <DialogFooter>
            {type == "update" && (
              <Button variant="destructive" className="mr-auto" onClick={() => onDelete(input?.basicDetails?.id)}>
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
              <Button disabled={!form?.formState?.isDirty || !form?.formState?.isValid} onClick={() => onUpdate(form.getValues())}>
                Save
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
