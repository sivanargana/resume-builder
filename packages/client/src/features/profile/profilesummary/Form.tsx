import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Trash } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { FEATURE } from "./constants";

export function _Form({ input, openDialog, setOpenDialog, onSave, onUpdate, onDelete, type }: any) {
  const defaultValues = {
    summary: "",
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
        summary: input?.profileSummary?.summary,
      });
    }
  }, [type, openDialog, input]);

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="min-w-150">
          <FieldSet>
            <FieldGroup>
              <Controller
                name="summary"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>{FEATURE}</FieldLabel>
                    <Textarea {...field} id={field.name} aria-invalid={fieldState.invalid} />
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>
          <DialogFooter>
            {type == "update" && (
              <Button variant="destructive" className="mr-auto" onClick={() => onDelete(input?.profileSummary?.id)}>
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
