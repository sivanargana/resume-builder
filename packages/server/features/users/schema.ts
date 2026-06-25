import * as z from "zod";

const userBase = {
  fullName: z.string(),
  mobile: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  workStatus: z.enum(["Fresher", "Experienced"]),
};

export const schema = {
  create: z.object(userBase),
  update: z.object({
    id: z.string().cuid(),
    fullName: z.string(),
    mobile: z.string(),
    email: z.string().email(),
    password: z.string().min(6).optional(),
    workStatus: z.enum(["Fresher", "Experienced"]),
  }),
  delete: z.object({
    id: z.string().cuid(),
  }),
  single: z.object({
    id: z.string().cuid(),
  }),
};
