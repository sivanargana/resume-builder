import { _Form } from "./Form";
import { _Card } from "./Card";
import { useState } from "react";
import { useProfile } from "../Root";
import { useCrud } from "./hooks";

export function Base() {
  const { data: input }: any = useProfile();
  const [openDialog, setOpenDialog] = useState(false);
  const { create, update, remove } = useCrud();

  const onSave = (data: any) => {
    create.mutate({ data }, { onSuccess: () => setOpenDialog(false) });
  };
  const onUpdate = (data: any) => {
    update.mutate({ id: input?.user?.avtar?.id, data }, { onSuccess: () => setOpenDialog(false) });
  };
  const onDelete = () => {
    remove.mutate({ id: input?.user?.avtar?.id }, { onSuccess: () => setOpenDialog(false) });
  };

  const state = {
    input,
    openDialog,
    setOpenDialog,
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
