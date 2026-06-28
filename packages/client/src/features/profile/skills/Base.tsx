import { _Form } from "./Form";
import { _Card } from "./Card";
import { api } from "@/axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function Base({ input }: any) {
  const [type, setType] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const queryClient = useQueryClient();

  const create: any = useMutation({
    mutationFn: (obj) => api.post(`user-skills`, obj),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["profile"] });
      setOpenDialog(false);
    },
  });
  const update: any = useMutation({
    mutationFn: ({ data, id }: any) => api.put(`user-skills/${id}`, data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["profile"] });
      setOpenDialog(false);
    },
  });
  const remove: any = useMutation({
    mutationFn: (id) => api.delete(`user-skills/${id}`),
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
      update.mutate({ id: input?.profile?.userSkills?.id, data });
    }
  };
  const onDelete = (id: any) => {
    remove.mutate(id);
  };

  return (
    <>
      <_Form {...{ input, openDialog, setOpenDialog, type, setType, onSave, onDelete }} />
      <_Card {...{ input, openDialog, setOpenDialog, type, setType }} />
    </>
  );
}
