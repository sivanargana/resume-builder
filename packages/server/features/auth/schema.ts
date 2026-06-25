import * as z from "zod";
export const schema = {
  login: z.object({
    email: z.string(),
    password: z.string(),
  }),
};
