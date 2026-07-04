import * as z from "zod";

const educationBase = {
  educationTypeId: z.string(),
};

export const schema = {
  create: z.object(educationBase),
  update: z.object({
    id: z.string(),
    ...educationBase,
  }),
  delete: z.object({
    id: z.string(),
  }),
  single: z.object({
    id: z.string(),
  }),
};
