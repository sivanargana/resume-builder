import * as z from "zod";
export const schema = {
  create: z.object({
    skillId: z.string(),
  }),
  update: z.object({
    id: z.string(),
    skillId: z.string(),
  }),
  delete: z.object({
    id: z.string(),
  }),
  single: z.object({
    id: z.string(),
  }),
};
