import * as z from "zod";

const experienceBase = {
  companyName: z.string(),
  employmentTypeId: z.string(),
  isCurrentEmployment: z.boolean(),
  jobTitle: z.string(),
  joiningDate: z.string(),
  workedTill: z.string(),
  jobProfile: z.string(),
};

export const schema = {
  create: z.object(experienceBase),
  update: z.object({
    id: z.string(),
    ...experienceBase,
  }),
  delete: z.object({
    id: z.string(),
  }),
  single: z.object({
    id: z.string(),
  }),
};
