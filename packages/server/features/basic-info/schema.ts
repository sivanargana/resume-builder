import * as z from "zod";

const base = {
  experienceYearId: z.string().nonempty("Experience year is required"),
  experienceMonthId: z.string().nonempty("Experience month is required"),
  salaryBreakdownId: z.string().nonempty("Salary breakdown is required"),
  availabilityTypeId: z.string().nonempty("Availability type is required"),
  salaryAmount: z.string().nonempty("Salary amount must be a positive number"),
  country: z.string().nonempty("Country is required"),
  location: z.string().nonempty("Location is required"),
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
