import * as z from "zod";

const basicDetails = z.object({
  photo: z.string().optional(),
  experienceYears: z.number().int(),
  experienceMonths: z.number().int(),
  salaryAmount: z.number().int(),
  salaryBreakdown: z.enum(["fixed", "ctc"]),
  country: z.string(),
  location: z.string(),
  availability: z.string(),
});

export const schema = {
  read: z.object({
    userId: z.string().cuid(),
  }),
  update: z.object({
    userId: z.string().cuid(),
    fullName: z.string(),
    mobile: z.string(),
    email: z.string().email(),
    workStatus: z.enum(["Fresher", "Experienced"]),
    basicDetails: basicDetails.optional(),
    headline: z.string().optional(),
    profileSummary: z.string().optional(),
  }),
};
