import * as z from "zod";

const experienceBase = {
  isCurrentEmployment: z.boolean(),
  employmentType: z.enum([
    "fulltime",
    "internship",
    "contract",
    "parttime",
    "freelance",
  ]),
  companyName: z.string().optional(),
  jobTitle: z.string().optional(),
  department: z.string().optional(),
  location: z.string().optional(),
  joiningDate: z.coerce.date().optional().nullable(),
  workedTill: z.coerce.date().optional().nullable(),
  monthlyStipend: z.number().int().optional().nullable(),
  currentSalary: z.number().int().optional().nullable(),
  totalExperience: z.number().int().optional().nullable(),
  jobProfile: z.string().optional(),
  noticePeriod: z.string().optional(),
  userId: z.string().cuid(),
};

export const schema = {
  create: z.object(experienceBase),
  update: z.object({
    id: z.string().cuid(),
    ...experienceBase,
  }),
  delete: z.object({
    id: z.string().cuid(),
  }),
  single: z.object({
    id: z.string().cuid(),
  }),
};
