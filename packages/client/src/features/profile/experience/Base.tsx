import { _Form } from "./Form";
import { _Card } from "./Card";
import { api } from "@/axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useProfile } from "../Root";

export function Base() {
  const { data: input }: any = useProfile();
  const [type, setType] = useState<any>(null);
  const [selected, setSelected] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const queryClient = useQueryClient();

  const create: any = useMutation({
    mutationFn: (obj) => api.post(`experience`, obj),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["profile"] });
      setOpenDialog(false);
    },
  });
  const update: any = useMutation({
    mutationFn: ({ data, id }: any) => api.put(`experience/${id}`, data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["profile"] });
      setOpenDialog(false);
    },
  });
  const remove: any = useMutation({
    mutationFn: (id) => api.delete(`experience/${id}`),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["profile"] });
      setOpenDialog(false);
    },
  });

  const onSave = (data: any) => {
    if (type == "create") {
      create.mutate({
        ...data,
        isCurrentEmployment: data.isCurrentEmployment == "true" ? true : false,
      });
    }

    if (type == "update") {
      update.mutate({ id: selected?.id, data: { ...data, isCurrentEmployment: data.isCurrentEmployment == "true" ? true : false } });
    }
  };
  const onDelete = () => {
    remove.mutate(selected?.id);
  };

  const state = {
    input,
    openDialog,
    setOpenDialog,
    type,
    setType,
    selected,
    setSelected,
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
