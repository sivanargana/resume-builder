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
import { useContent } from "@/components/ContentProvider";

export function _Form({ input, openDialog, setOpenDialog, onSave, onDelete, type }: any) {
  const { masterdata }: any = useContent();

  const defaultValues = {
    experienceYearId: "",
    experienceMonthId: "",
    salaryBreakdownId: "",
    availabilityTypeId: "",
    salaryAmount: "",
    photo: "",
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
        photo: input?.basicDetails?.photo,
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
            <DialogTitle>Basic Details</DialogTitle>
          </DialogHeader>

          <FieldSet>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Controller
                    name="experienceYearId"
                    control={form.control}
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
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Current salary</FieldLabel>
                        <Input {...field} onChange={(e) => field.onChange(e.target.value === "" ? undefined : Number(e.target.value))} id={field.name} aria-invalid={fieldState.invalid} />
                      </Field>
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="salaryBreakdownId"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Salary breakdown</FieldLabel>
                        <Select name={field.name} value={field.value} onValueChange={field.onChange} aria-invalid={fieldState.invalid}>
                          <SelectTrigger id={field.name} className="w-full">
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
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Country</FieldLabel>
                    <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} className="flex gap-5 w-fit" aria-invalid={fieldState.invalid}>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="India" id="India" />
                        <Label htmlFor="India">India</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="OutsideIndia" id="OutsideIndia" />
                        <Label htmlFor="OutsideIndia">Outside India</Label>
                      </div>
                    </RadioGroup>
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
                name="availabilityTypeId"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Availability to join</FieldLabel>
                    <ToggleGroup value={field.value} onValueChange={field.onChange} type="single" variant="outline" aria-invalid={fieldState.invalid}>
                      {masterdata?.data?.availabilityType.map((item: any) => (
                        <ToggleGroupItem value={item.id} key={item.id}>
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
            <Button disabled={!form?.formState?.isDirty} onClick={() => onSave(form.getValues())}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
