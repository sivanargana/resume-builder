import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "./api";

export function useCrud() {
  const queryClient = useQueryClient();

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["profile"] });

  const update = useMutation({
    mutationFn: API.update,
    onSuccess: invalidate,
  });

  return {
    update,
  };
}
