import { _Form } from "./Form";
import { _Card } from "./Card";
import { useState } from "react";
import { useProfile } from "../Root";
import { useCrud } from "./hooks";
import { useContent } from "@/components/ContentProvider";

export function Base() {
  const { data: input }: any = useProfile();
  const [type, setType] = useState<any>(null);
  const [selected, setSelected] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const { create, update, remove } = useCrud();
  const { masterdata }: any = useContent();

  const onSave = (data: any) => {
    if (type == "create") {
      const payload = { ...data, isCurrentEmployment: data.isCurrentEmployment == "true" };
      create.mutate({ data: payload }, { onSuccess: () => setOpenDialog(false) });
    }
  };
  const onUpdate = (data: any) => {
    if (type == "update") {
      const payload = { ...data, isCurrentEmployment: data.isCurrentEmployment == "true" };
      update.mutate({ id: selected?.id, data: payload }, { onSuccess: () => setOpenDialog(false) });
    }
  };
  const onDelete = (id: any) => {
    remove.mutate({ id }, { onSuccess: () => setOpenDialog(false) });
  };

  const state = {
    input,
    masterdata,
    openDialog,
    setOpenDialog,
    type,
    setType,
    selected,
    setSelected,
    onSave,
    onUpdate,
    onDelete,
  };

  return (
    <>
      <_Form {...state} />
      <_Card {...state} />
    </>
  );
}
