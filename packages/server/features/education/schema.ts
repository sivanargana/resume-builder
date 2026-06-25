import * as z from "zod";

const educationBase = {
  education: z.string(),
  university: z.string(),
  course: z.string(),
  specialization: z.string().optional(),
  type: z.enum(["fulltime", "parttime", "distance"]),
  startYear: z.number().int().optional(),
  endYear: z.number().int().optional(),
  gradeSystem: z.string().optional(),
  marks: z.string().optional(),
  userId: z.string().cuid(),
};

export const schema = {
  create: z.object(educationBase),
  update: z.object({
    id: z.string().cuid(),
    ...educationBase,
  }),
  delete: z.object({
    id: z.string().cuid(),
  }),
  single: z.object({
    id: z.string().cuid(),
  }),
};
