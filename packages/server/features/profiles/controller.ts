import type { Request, Response } from "express";
import { service } from "./service";
import { Prisma } from "../../generated/prisma/client";

const isNotFoundError = (err: unknown) =>
  err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025";

const requireId = (req: Request, res: Response): string | null => {
  const id = req.params.id;
  if (typeof id !== "string" || id.length === 0) {
    res.status(400).json({ error: "Missing id" });
    return null;
  }
  return id;
};

export const controller = {
  async create(req: Request, res: Response) {
    const result = await service.create(req.body);
    res.status(201).json(result);
  },

  async read(_req: Request, res: Response) {
    const result = await service.read();
    res.json(result);
  },

  async readOne(req: Request, res: Response) {
    const id = requireId(req, res);
    if (id === null) return;
    const result = await service.readOne(id);
    if (!result) {
      res.status(404).json({ error: "Profile not found" });
      return;
    }
    res.json(result);
  },

  async update(req: Request, res: Response) {
    const id = requireId(req, res);
    if (id === null) return;
    try {
      const result = await service.update(id, req.body);
      res.json(result);
    } catch (err) {
      if (isNotFoundError(err)) {
        res.status(404).json({ error: "Profile not found" });
        return;
      }
      throw err;
    }
  },

  async delete(req: Request, res: Response) {
    const id = requireId(req, res);
    if (id === null) return;
    try {
      await service.delete(id);
      res.status(204).send();
    } catch (err) {
      if (isNotFoundError(err)) {
        res.status(404).json({ error: "Profile not found" });
        return;
      }
      throw err;
    }
  },
};
