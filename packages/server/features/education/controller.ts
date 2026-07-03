import type { Request, Response } from "express";
import { service } from "./service";
import { schema } from "./schema";

export const controller = {
  // Create
  async create(req: Request & { user: any }, res: Response) {
    const response = schema.create.safeParse(req.body);
    if (!response.success) {
      return res.status(400).json({
        errors: response.error.issues,
      });
    }
    try {
      let result = await service.create({ userId: req.user.id, ...response.data });
      res.status(201).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
  // Read
  async read(req: Request, res: Response) {
    try {
      let result = await service.read();
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
  // Single
  async single(req: Request, res: Response) {
    const response = schema.single.safeParse({ id: req.params.id });

    if (!response.success) {
      return res.status(400).json({
        errors: response.error.issues,
      });
    }
    try {
      let result = await service.single(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
  // Update
  async update(req: Request, res: Response) {
    const response = schema.update.safeParse({
      id: req.params.id,
      ...req.body,
    });

    if (!response.success) {
      return res.status(400).json({
        errors: response.error.issues,
      });
    }
    try {
      let result = await service.update(req.params.id, response.data);
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
  // Delete
  async delete(req: Request, res: Response) {
    const response = schema.delete.safeParse({ id: req.params.id });

    if (!response.success) {
      return res.status(400).json({
        errors: response.error.issues,
      });
    }
    try {
      let result = await service.delete(req.params.id);
      res.status(204).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
