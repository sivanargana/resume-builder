import type { Request, Response } from "express";
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
      res.status(204).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
