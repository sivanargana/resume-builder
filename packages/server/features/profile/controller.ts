import type { Request, Response } from "express";
import { service } from "./service";
import { schema } from "./schema";

export const controller = {
  // Read full profile (user + 1:1 relations + children)
  async read(req: Request, res: Response) {
    const response = schema.read.safeParse({ userId: req.params.id });
    if (!response.success) {
      return res.status(400).json({ errors: response.error.issues });
    }
    try {
      const result = await service.read(response.data.userId);
      if (!result) {
        return res.status(404).json({ errors: "Profile not found" });
      }
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },

  // Update user fields + 1:1 relations in one shot
  async update(req: Request, res: Response) {
    const response = schema.update.safeParse({
      userId: req.params.id,
      ...req.body,
    });
    if (!response.success) {
      return res.status(400).json({ errors: response.error.issues });
    }
    try {
      const { userId, ...rest } = response.data;
      const result = await service.update(userId, rest);
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
