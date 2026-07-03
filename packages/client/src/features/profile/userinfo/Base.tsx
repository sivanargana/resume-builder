import { _Form } from "./Form";
import { _Card } from "./Card";
import { api } from "@/axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useProfile } from "../Root";

export function Base() {
  const { data: input }: any = useProfile();

  const [type, setType] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const queryClient = useQueryClient();

  const update: any = useMutation({
    mutationFn: ({ data, id }: any) => api.patch(`users/${id}`, data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["profile"] });
      setOpenDialog(false);
    },
  });

  const onSave = (data: any) => {
    if (type == "update") {
      update.mutate({ id: input?.user?.id, data });
    }
  };

  return (
    <>
      <_Form {...{ input, openDialog, setOpenDialog, type, setType, onSave }} />
      <_Card {...{ input, openDialog, setOpenDialog, type, setType }} />
    </>
  );
}
