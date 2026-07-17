import * as z from "zod";
export const schema = {
  create: z.object({
    name: z.string(),
  }),
  update: z.object({
    id: z.string(),
    name: z.string(),
  }),
  delete: z.object({
    id: z.string(),
  }),
  single: z.object({
    id: z.string(),
  }),
};
