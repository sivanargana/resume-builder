import * as z from "zod";
export const schema = {
  create: z.object({
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    headline: z.string(),
    summary: z.string(),
    userId: z.string().cuid(),
  }),
  update: z.object({
    id: z.string().cuid(),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    headline: z.string(),
    summary: z.string(),
    userId: z.string().cuid(),
  }),
  delete: z.object({
    id: z.string().cuid()
  }),
  single: z.object({
    id: z.string().cuid()
  })
};