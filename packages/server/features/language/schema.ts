import * as z from "zod";

const languageBase = {
  name: z.string(),
  proficiency: z.enum(["beginner", "proficient", "expert"]),
  read: z.boolean(),
  write: z.boolean(),
  speak: z.boolean(),
  userId: z.string().cuid(),
};

export const schema = {
  create: z.object(languageBase),
  update: z.object({
    id: z.string().cuid(),
    ...languageBase,
  }),
  delete: z.object({
    id: z.string().cuid(),
  }),
  single: z.object({
    id: z.string().cuid(),
  }),
};
