import * as z from "zod";
export const schema = {
  create: z.object({
    company: z.string(),
    designation: z.string(),
    profileId: z.string().cuid(),
  }),
  update: z.object({
    id: z.string().cuid(),
    company: z.string(),
    designation: z.string(),
    profileId: z.string().cuid(),
  }),
  delete: z.object({
    id: z.string().cuid()
  }),
  single: z.object({
    id: z.string().cuid()
  })
};