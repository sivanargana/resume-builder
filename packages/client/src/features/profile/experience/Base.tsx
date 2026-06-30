import { _Form } from "./Form";
import { _Card } from "./Card";
import { api } from "@/axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function Base({ input }: any) {
  const [type, setType] = useState<any>(null);
  const [selected, setSelected] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(true);

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
    console.log(data);
    if (type == "create") {
      // create.mutate(data);
    }

    if (type == "update") {
      // update.mutate({ id: input?.experience?.id, data });
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
