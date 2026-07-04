import * as z from "zod";
const id = { id: z.string() };
const base = {
  firstName: z.string(),
  lastName: z.string(),
  mobile: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
};
const { password, ...update } = base;

export const schema = {
  create: z.object(base),
  update: z.object({
    ...id,
    ...update,
  }),
  delete: z.object(id),
  single: z.object(id),
};
