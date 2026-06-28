import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/axios";
function UserForm({ data }: any) {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [temp, setTemp] = useState({});
  const form = useForm();

  const queryClient = useQueryClient();

  const mutation: any = useMutation({
    mutationFn: (obj) => api.patch(`users/${data?.profile?.id}`, obj),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["profile"] });
      setOpen(false);
    },
  });
  useEffect(() => {
    form.setValues({
      workStatusId: data?.profile?.workStatus.id,
      fullName: data?.profile?.fullName,
      mobile: data?.profile?.mobile,
      email: data?.profile?.email,
    });

    setTemp(form.getValues());
  }, [data]);

  const onSave = () => {
    mutation.mutate(form.getValues());
  };

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
                form.reset(temp);
                setAlert(false);
                setOpen(false);
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
          if (!open && form?.formState?.isDirty) {
            setAlert(true);
          } else {
            setOpen(val);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Details </DialogTitle>
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
                    <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange} className="flex flex-col gap-2 w-fit">
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
            </FieldGroup>
          </FieldSet>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={!form?.formState?.isDirty} onClick={onSave}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UserForm;
