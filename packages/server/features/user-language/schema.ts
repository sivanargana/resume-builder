import * as z from "zod";

const languageBase = {
  languageId: z.string(),
  proficiencyId: z.string(),
  read: z.boolean(),
  write: z.boolean(),
  speak: z.boolean(),
};

export const schema = {
  create: z.object(languageBase),
  update: z.object({
    id: z.string(),
    ...languageBase,
  }),
  delete: z.object({
    id: z.string(),
  }),
  single: z.object({
    id: z.string(),
  }),
};
