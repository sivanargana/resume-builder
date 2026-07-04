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

  const create: any = useMutation({
    mutationFn: (obj) => api.post(`profile-summary`, obj),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["profile"] });
      setOpenDialog(false);
    },
  });
  const update: any = useMutation({
    mutationFn: ({ data, id }: any) => api.put(`profile-summary/${id}`, data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["profile"] });
      setOpenDialog(false);
    },
  });
  const remove: any = useMutation({
    mutationFn: (id) => api.delete(`profile-summary/${id}`),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["profile"] });
      setOpenDialog(false);
    },
  });

  const onSave = (data: any) => {
    if (type == "create") {
      create.mutate(data);
    }

    if (type == "update") {
      update.mutate({ id: input?.profileSummary?.id, data });
    }
  };
  const onDelete = (id: any) => {
    remove.mutate(id);
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
