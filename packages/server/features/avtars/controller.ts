import type { Request, Response } from "express";
import { service } from "./service";
import { schema } from "./schema";

import { unlink } from "fs/promises";
import path from "path";

export const controller = {
  // Create
  async create(req: Request & { user: any }, res: Response) {
    try {
      let result = await service.create({ userId: req.user.id, url: req.file?.path });
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
  async update(req: Request & { user: any }, res: Response) {
    let avtar: any = await service.getImage(req.user.id);

    if (avtar.url) {
      const oldPath = path.join(process.cwd(), avtar.url);

      try {
        await unlink(oldPath);
      } catch {
        console.log("file not exist");
      }
    }

    try {
      let result = await service.update(req.params.id, { url: req.file?.path });
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
  // Delete
  async delete(req: Request & { user: any }, res: Response) {
    let avtar: any = await service.getImage(req.user.id);

    if (avtar.url) {
      const oldPath = path.join(process.cwd(), avtar.url);

      try {
        await unlink(oldPath);
      } catch {
        console.log("file not exist");
      }
    }
    try {
      let result = await service.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
