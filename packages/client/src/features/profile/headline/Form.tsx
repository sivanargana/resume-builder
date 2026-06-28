import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Trash } from "lucide-react";

export function _Form({ input, openDialog, setOpenDialog, onSave, onDelete, type }: any) {
  const defaultValues = {
    name: "",
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
        name: input?.profile?.headline?.name,
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
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Headline</FieldLabel>
                    <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>
          <DialogFooter>
            {type == "update" && (
              <Button variant="destructive" className="mr-auto" onClick={() => onDelete(input?.profile?.basicDetails?.id)}>
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
