import * as z from "zod";
export const schema = {
  create: z.object({
    email: z.string(),
    password: z.string(),
  }),
  update: z.object({
    id: z.string().cuid(),
    email: z.string(),
    password: z.string(),
  }),
  delete: z.object({
    id: z.string().cuid()
  }),
  single: z.object({
    id: z.string().cuid()
  })
};