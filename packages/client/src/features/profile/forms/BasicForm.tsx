import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import { useEffect } from "react";
function BasicForm({ data }: any) {
  const form = useForm();
  useEffect(() => {
    form.setValues({
      fullName: data?.fullName,
      workStatus: data?.workStatus,
      mobile: data?.mobile,
      email: data?.email,
      availability: data?.basicDetails?.availability,
      country: data?.basicDetails?.country,
      experienceMonths: data?.basicDetails?.experienceMonths,
      experienceYears: data?.basicDetails?.experienceYears,
      location: data?.basicDetails?.location,
      photo: data?.basicDetails?.photo,
      salaryAmount: data?.basicDetails?.salaryAmount,
      salaryBreakdown: data?.basicDetails?.salaryBreakdown,
    });
  }, [data]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <Edit2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[600px]">
        <DialogHeader>
          <DialogTitle>Basic Details</DialogTitle>
        </DialogHeader>
        <FieldSet>
          <FieldGroup>
            <Controller
              name="fullName"
              control={form.control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                </Field>
              )}
            />

            <Controller
              name="workStatus"
              control={form.control}
              defaultValue="Fresher"
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Work status</FieldLabel>
                  <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} className="flex gap-5 w-fit">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="Fresher" id="Fresher" />
                      <Label htmlFor="Fresher">Fresher</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="Experienced" id="Experienced" />
                      <Label htmlFor="Experienced">Experienced</Label>
                    </div>
                  </RadioGroup>
                </Field>
              )}
            />
            <div className="grid grid-cols-2 gap-5">
              <div>
                <Controller
                  name="experienceYears"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Years</FieldLabel>
                      <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id={field.name} className="w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  )}
                />
              </div>
              <div>
                <Controller
                  name="experienceMonths"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Months</FieldLabel>
                      <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id={field.name} className="w-full">
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Months</SelectLabel>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
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
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
              </div>
              <div>
                <Controller
                  name="salaryBreakdown"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Salary breakdown</FieldLabel>
                      <Select {...field}>
                        <SelectTrigger id={field.name} className="w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
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
                  <RadioGroup {...field} defaultValue="India" className="flex gap-5 w-fit">
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
              name="mobile"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Mobile</FieldLabel>
                  <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                </Field>
              )}
            />

            <Controller
              name="availability"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Availability to join</FieldLabel>
                  <ToggleGroup value={field.value} onValueChange={field.onChange} type="single" variant="outline">
                    <ToggleGroupItem value="15 Days or less">15 Days or less</ToggleGroupItem>
                    <ToggleGroupItem value="1 Month">1 Month</ToggleGroupItem>
                    <ToggleGroupItem value="2 Months">2 Months</ToggleGroupItem>
                    <ToggleGroupItem value="3 Months">3 Months</ToggleGroupItem>
                  </ToggleGroup>
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={() => console.log(form.getValues())}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BasicForm;
