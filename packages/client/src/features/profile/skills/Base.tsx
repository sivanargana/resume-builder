import { _Form } from "./Form";
import { _Card } from "./Card";
import { useState } from "react";
import { useProfile } from "../Root";
import { useCrud } from "./hooks";
import { useContent } from "@/components/ContentProvider";

export function Base() {
  const { data: input }: any = useProfile();
  const [type, setType] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const { create } = useCrud();
  const { masterdata }: any = useContent();

  const onSave = (skills: any[]) => {
    create.mutate({ data: { skills: skills.map((item) => item.id) } }, { onSuccess: () => setOpenDialog(false) });
  };

  const state = {
    input,
    masterdata,
    openDialog,
    setOpenDialog,
    type,
    setType,
    onSave,
  };

  return (
    <>
      <_Form {...state} />
      <_Card {...state} />
    </>
  );
}
