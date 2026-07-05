import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useContent } from "@/components/ContentProvider";
import { FEATURE } from "./constants";

export function _Form({ input, openDialog, setOpenDialog, onUpdate, type }: any) {
  const { masterdata }: any = useContent();

  const defaultValues = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
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
        firstName: input?.user?.firstName,
        lastName: input?.user?.lastName,
        mobile: input?.user?.mobile,
        email: input?.user?.email,
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
              <div className="grid grid-cols-2 gap-4">
                <Controller
                  name="firstName"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
                <Controller
                  name="lastName"
                  control={form.control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Controller
                  name="mobile"
                  control={form.control}
                  rules={{ required: true }}
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
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                    </Field>
                  )}
                />
              </div>
            </FieldGroup>
          </FieldSet>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
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
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
