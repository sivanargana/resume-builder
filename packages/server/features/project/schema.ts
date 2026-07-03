import * as z from "zod";

const projectBase = {
  title: z.string(),
  client: z.string(),
  status: z.string(),
  startYear: z.string(),
  endYear: z.string(),
  details: z.string(),
  location: z.string(),
  site: z.string(),
  employmentTypeId: z.string(),
  teamSize: z.string(),
  role: z.string(),
  roleDescription: z.string(),
  skillsUsed: z.string(),
};

export const schema = {
  create: z.object(projectBase),
  update: z.object({
    id: z.string(),
    ...projectBase,
  }),
  delete: z.object({
    id: z.string(),
  }),
  single: z.object({
    id: z.string(),
  }),
};
