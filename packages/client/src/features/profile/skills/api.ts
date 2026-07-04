import { api } from "@/axios";
import { RESOURCE } from "./constants";
import type { CreateRequest, CreateResponse } from "./types";

const create = ({ data }: CreateRequest) => api.post<CreateResponse>(`${RESOURCE}/many`, data);

export const API = { create };
