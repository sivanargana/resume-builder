import { api } from "@/axios";
import { RESOURCE } from "./constants";
import type { CreateRequest, CreateResponse, DeleteRequest, DeleteResponse, UpdateRequest, UpdateResponse } from "./types";

const create = ({ data }: CreateRequest) => api.post<CreateResponse>(RESOURCE, data);
const update = ({ id, data }: UpdateRequest) => api.put<UpdateResponse>(`${RESOURCE}/${id}`, data);
const remove = ({ id }: DeleteRequest) => api.delete<DeleteResponse>(`${RESOURCE}/${id}`);

export const API = { create, update, remove };
