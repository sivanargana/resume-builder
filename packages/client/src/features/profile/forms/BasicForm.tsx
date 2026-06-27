import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import { useEffect, useState } from "react";
function BasicForm({ data }: any) {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [temp, setTemp] = useState({});
  const form = useForm();
  useEffect(() => {
    form.setValues({
      workStatusId: data?.profile?.workStatus.id,
      fullName: data?.profile?.fullName,
      mobile: data?.profile?.mobile,
      email: data?.profile?.email,

      experienceYearId: data?.profile?.basicDetails?.experienceYear.id,
      experienceMonthId: data?.profile?.basicDetails?.experienceMonth.id,
      salaryBreakdownId: data?.profile?.basicDetails?.salaryBreakdown.id,
      availabilityTypeId: data?.profile?.basicDetails?.availabilityType.id,
      salaryAmount: data?.profile?.basicDetails?.salaryAmount,
      photo: data?.profile?.basicDetails?.photo,
      country: data?.profile?.basicDetails?.country,
      location: data?.profile?.basicDetails?.location,
    });

    setTemp(form.getValues());
  }, [data]);

  return (
    <>
      <Button size="icon" variant="outline" onClick={() => setOpen(true)}>
        <Edit2 />
      </Button>
      <AlertDialog open={alert} onOpenChange={setAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Discard changes?</AlertDialogTitle>
            <AlertDialogDescription>You have unsaved changes. If you leave now, your changes will be lost.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setAlert(false);
                setOpen(false);
                form.reset(temp);
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog
        open={open}
        onOpenChange={(val) => {
          if (form?.formState?.isDirty) {
            setAlert(true);
          } else {
            setOpen(val);
          }
        }}
      >
        <DialogContent className="min-w-150">
          <DialogHeader>
            <DialogTitle>Basic Details {form?.formState?.isDirty ? "yes" : "no"}</DialogTitle>
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
                name="workStatusId"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Work status</FieldLabel>
                    <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} className="flex gap-5 w-fit">
                      {data?.workStatus?.map((item: any) => (
                        <div className="flex items-center gap-3" key={item.id}>
                          <RadioGroupItem value={item.id} id={item.name} />
                          <Label htmlFor={item.name}>{item.name}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </Field>
                )}
              />
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Controller
                    name="experienceYearId"
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
                              {data?.experienceYear.map((item: any) => (
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
                          <SelectTrigger id={field.name} className="w-full">
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {data?.experienceMonth.map((item: any) => (
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
                        <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
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
                        <Select {...field}>
                          <SelectTrigger id={field.name} className="w-full">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {data?.salaryBreakdown.map((item: any) => (
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
                name="availabilityTypeId"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Availability to join</FieldLabel>
                    <ToggleGroup value={field.value} onValueChange={field.onChange} type="single" variant="outline">
                      {data?.availabilityType.map((item: any) => (
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
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={!form?.formState?.isDirty} onClick={() => console.log(form.getValues())}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default BasicForm;
