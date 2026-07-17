import * as z from "zod";
export const schema = {
  login: z.object({
    email: z.string().min(1, { message: "Required" }),
    password: z.string().min(1, { message: "Required" }),
  }),
  register: z.object({
    firstName: z.string().min(1, { message: "Required" }),
    lastName: z.string().min(1, { message: "Required" }),
    email: z.string().min(1, { message: "Required" }),
    mobile: z.string().min(1, { message: "Required" }),
    password: z.string().min(1, { message: "Required" }),
  }),
};
