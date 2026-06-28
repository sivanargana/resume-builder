import * as z from "zod";

const base = {
  experienceYearId: z.string(),
  experienceMonthId: z.string(),
  salaryBreakdownId: z.string(),
  availabilityTypeId: z.string(),
  salaryAmount: z.coerce.number(),
  photo: z.string(),
  country: z.string(),
  location: z.string(),
};

export const schema = {
  create: z.object(base),
  update: z.object({
    id: z.string(),
    ...base,
  }),
  delete: z.object({
    id: z.string(),
  }),
  single: z.object({
    id: z.string(),
  }),
};
