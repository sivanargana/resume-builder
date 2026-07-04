import { api } from "@/axios";
import { RESOURCE } from "./constants";

const create = ({ data }: any) => api.post(RESOURCE, data, { headers: { "Content-Type": "multipart/form-data" } });
const update = ({ id, data }: any) => api.put(`${RESOURCE}/${id}`, data, { headers: { "Content-Type": "multipart/form-data" } });
const remove = ({ id }: any) => api.delete(`${RESOURCE}/${id}`);

export const API = { create, update, remove };
