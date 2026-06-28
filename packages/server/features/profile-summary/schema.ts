import * as z from "zod";
export const schema = {
  create: z.object({
    summary: z.string(),
  }),
  update: z.object({
    id: z.string(),
    summary: z.string(),
  }),
  delete: z.object({
    id: z.string(),
  }),
  single: z.object({
    id: z.string(),
  }),
};
