import { _Form } from "./Form";
import { _Card } from "./Card";
import { useState } from "react";
import { useProfile } from "../Root";
import { useCrud } from "./hooks";

export function Base() {
  const { data: input }: any = useProfile();
  const [type, setType] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const { update } = useCrud();

  const onUpdate = (data: any) => {
    if (type == "update") {
      update.mutate({ id: input?.user?.id, data }, { onSuccess: () => setOpenDialog(false) });
    }
  };

  const state = {
    input,
    openDialog,
    setOpenDialog,
    type,
    setType,
    onUpdate,
  };

  return (
    <>
      <_Form {...state} />
      <_Card {...state} />
    </>
  );
}
