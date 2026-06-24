import * as z from "zod";
export const schema = {
  create: z.object({
    degree: z.string(),
    institute: z.string(),
    profileId: z.string().cuid(),
  }),
  update: z.object({
    id: z.string().cuid(),
    degree: z.string(),
    institute: z.string(),
    profileId: z.string().cuid(),
  }),
  delete: z.object({
    id: z.string().cuid()
  }),
  single: z.object({
    id: z.string().cuid()
  })
};