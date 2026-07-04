import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Trash } from "lucide-react";
import { useContent } from "@/components/ContentProvider";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FEATURE } from "./constants";

export function _Form({ openDialog, setOpenDialog, onSave, onUpdate, onDelete, type, selected }: any) {
  const { masterdata }: any = useContent();
  const defaultValues = {
    proficiencyId: "",
    languageId: "",
    read: false,
    write: false,
    speak: false,
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
        proficiencyId: selected?.proficiency?.id,
        languageId: selected?.language?.id,
        read: selected?.read,
        write: selected?.write,
        speak: selected?.speak,
      });
    }
  }, [type, openDialog]);

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="min-w-100">
          <DialogHeader>
            <DialogTitle>{FEATURE}</DialogTitle>
          </DialogHeader>

          <FieldSet>
            <FieldGroup>
              <Controller
                name="languageId"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Language</FieldLabel>
                    <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger id={field.name} className="w-full" aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {masterdata?.data?.language.map((item: any) => (
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
                name="proficiencyId"
                control={form.control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Proficiency</FieldLabel>
                    <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger id={field.name} className="w-full" aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {masterdata?.data?.proficiency.map((item: any) => (
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
                name="read"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field orientation="horizontal">
                    <Checkbox name={field.name} checked={field.value} onCheckedChange={field.onChange} id={field.name} />
                    <Label htmlFor={field.name}>Read</Label>
                  </Field>
                )}
              />
              <Controller
                name="write"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field orientation="horizontal">
                    <Checkbox name={field.name} checked={field.value} onCheckedChange={field.onChange} id={field.name} />
                    <Label htmlFor={field.name}>Write</Label>
                  </Field>
                )}
              />
              <Controller
                name="speak"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field orientation="horizontal">
                    <Checkbox name={field.name} checked={field.value} onCheckedChange={field.onChange} id={field.name} />
                    <Label htmlFor={field.name}>Speak</Label>
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
