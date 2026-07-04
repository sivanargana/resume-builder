import { _Form } from "./Form";
import { _Card } from "./Card";
import { useState } from "react";
import { useProfile } from "../Root";
import { useCrud } from "./hooks";

export function Base() {
  const { data: input }: any = useProfile();

  const [type, setType] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const { create, update, remove } = useCrud();

  const onSave = (data: any) => {
    if (type == "create") {
      create.mutate({ data }, { onSuccess: () => setOpenDialog(false) });
    }

    if (type == "update") {
      update.mutate({ id: input?.basicDetails?.id, data }, { onSuccess: () => setOpenDialog(false) });
    }
  };
  const onDelete = (id: any) => {
    remove.mutate({ id }, { onSuccess: () => setOpenDialog(false) });
  };

  const state = {
    input,
    openDialog,
    setOpenDialog,
    type,
    setType,
    onSave,
    onDelete,
  };

  return (
    <>
      <_Form {...state} />
      <_Card {...state} />
    </>
  );
}
