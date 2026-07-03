import * as z from "zod";

const educationBase = {
  educationTypeId: z.string(),
  university: z.string(),
  course: z.string(),
  specialization: z.string(),
  startYear: z.string(),
  endYear: z.string(),
  gradeSystem: z.string(),
  marks: z.string(),
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
