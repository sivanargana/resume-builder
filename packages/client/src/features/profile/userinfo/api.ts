import { api } from "@/axios";
import { RESOURCE } from "./constants";
import type { UpdateRequest, UpdateResponse } from "./types";

const update = ({ id, data }: UpdateRequest) => api.put<UpdateResponse>(`${RESOURCE}/${id}`, data);

export const API = { update };
