import * as z from "zod";
export const schema = {
  create: z.object({
    value: z.string(),
  }),
  update: z.object({
    id: z.string(),
    value: z.string(),
  }),
  delete: z.object({
    id: z.string(),
  }),
  single: z.object({
    id: z.string(),
  }),
};
