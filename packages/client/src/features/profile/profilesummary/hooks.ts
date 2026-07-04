import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "./api";

export function useCrud() {
  const queryClient = useQueryClient();

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["profile"] });

  const create = useMutation({
    mutationFn: API.create,
    onSuccess: invalidate,
  });

  const update = useMutation({
    mutationFn: API.update,
    onSuccess: invalidate,
  });

  const remove = useMutation({
    mutationFn: API.remove,
    onSuccess: invalidate,
  });

  return {
    create,
    update,
    remove,
  };
}
