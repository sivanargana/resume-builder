import * as z from "zod";

const projectBase = {
  title: z.string(),
  client: z.string().optional(),
  status: z.string().optional(),
  startYear: z.number().int().optional(),
  endYear: z.number().int().optional(),
  details: z.string().optional(),
  location: z.string().optional(),
  site: z.string().optional(),
  type: z.string().optional(),
  teamSize: z.number().int().optional(),
  role: z.string().optional(),
  roleDescription: z.string().optional(),
  skillsUsed: z.string().optional(),
  userId: z.string().cuid(),
};

export const schema = {
  create: z.object(projectBase),
  update: z.object({
    id: z.string().cuid(),
    ...projectBase,
  }),
  delete: z.object({
    id: z.string().cuid(),
  }),
  single: z.object({
    id: z.string().cuid(),
  }),
};
