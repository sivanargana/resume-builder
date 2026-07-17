// Helper script to scaffold master data CRUD for each model
// Run with: npx tsx packages/server/features/generate-masterdata.ts

import * as fs from "fs";
import * as path from "path";

const features: { name: string; prismModel: string; routePath: string }[] = [
  { name: "experience-year", prismModel: "ExperienceYear", routePath: "experience-year" },
  { name: "experience-month", prismModel: "ExperienceMonth", routePath: "experience-month" },
  { name: "salary-breakdown", prismModel: "SalaryBreakdown", routePath: "salary-breakdown" },
  { name: "availability-type", prismModel: "AvailabilityType", routePath: "availability-type" },
  { name: "employment-type", prismModel: "EmploymentType", routePath: "employment-type" },
  { name: "education-type", prismModel: "EducationType", routePath: "education-type" },
];

const featuresDir = path.resolve(__dirname);

const schemaTemplate = (modelName: string) => `import * as z from "zod";

export const schema = {
  create: z.object({
    name: z.string(),
  }),
  update: z.object({
    id: z.string(),
    name: z.string(),
  }),
  delete: z.object({
    id: z.string(),
  }),
  single: z.object({
    id: z.string(),
  }),
};
`;

const controllerTemplate = `import type { Request, Response } from "express";
import { service } from "./service";
import { schema } from "./schema";

export const controller = {
  async create(req: Request, res: Response) {
    const response = schema.create.safeParse(req.body);
    if (!response.success) {
      return res.status(400).json({ errors: response.error.issues });
    }
    try {
      const result = await service.create(response.data);
      res.status(201).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },

  async read(req: Request, res: Response) {
    try {
      const result = await service.read();
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },

  async single(req: Request, res: Response) {
    const response = schema.single.safeParse({ id: req.params.id });
    if (!response.success) {
      return res.status(400).json({ errors: response.error.issues });
    }
    try {
      const result = await service.single(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },

  async update(req: Request, res: Response) {
    const response = schema.update.safeParse({
      id: req.params.id,
      ...req.body,
    });
    if (!response.success) {
      return res.status(400).json({ errors: response.error.issues });
    }
    try {
      const result = await service.update(req.params.id, response.data);
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },

  async delete(req: Request, res: Response) {
    const response = schema.delete.safeParse({ id: req.params.id });
    if (!response.success) {
      return res.status(400).json({ errors: response.error.issues });
    }
    try {
      const result = await service.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
`;

const serviceTemplate = (prismModel: string) => `import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.${prismModel}.create({ data: body });
  },
  async read() {
    return await prisma.${prismModel}.findMany();
  },
  async single(id: any) {
    return await prisma.${prismModel}.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.${prismModel}.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.${prismModel}.delete({ where: { id } });
  },
};
`;

const routesTemplate = `import { Router } from "express";
import { controller } from "./controller";

export const router = Router();
router.post("/", controller.create);
router.get("/", controller.read);
router.get("/:id", controller.single);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
`;

const indexTemplate = `export { router as ${"$"}name } from "./routes";
`;

// Delete existing empty directories first
for (const f of features) {
  const dir = path.join(featuresDir, f.name.replace(/-/g, ""));
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    if (files.length === 0) {
      fs.rmdirSync(dir);
    }
  }
}

for (const f of features) {
  const featureFolder = f.name.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^[a-z]/, (c) => c.toLowerCase());
  const dir = path.join(featuresDir, featureFolder);
  fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(path.join(dir, "schema.ts"), schemaTemplate(f.prismModel));
  fs.writeFileSync(path.join(dir, "controller.ts"), controllerTemplate);
  fs.writeFileSync(path.join(dir, "service.ts"), serviceTemplate(f.prismModel));
  fs.writeFileSync(path.join(dir, "routes.ts"), routesTemplate);
  fs.writeFileSync(path.join(dir, "index.ts"), `export { router as ${featureFolder}Routes } from "./routes";\n`);

  console.log(`Created feature: ${featureFolder} at ${dir}`);
}

console.log("\nDone! Now add these imports and route mounts to index.ts:");
console.log("\n--- Imports ---");
for (const f of features) {
  const featureFolder = f.name.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^[a-z]/, (c) => c.toLowerCase());
  console.log(`import { ${featureFolder}Routes } from "./features/${featureFolder}";`);
}
console.log("\n--- Route mounts (add after existing routes) ---");
for (const f of features) {
  const featureFolder = f.name.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^[a-z]/, (c) => c.toLowerCase());
  console.log(`app.use("/api/${f.routePath}", isAuthenticated, ${featureFolder}Routes);`);
}
