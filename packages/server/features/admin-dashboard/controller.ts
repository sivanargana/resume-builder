import type { Request, Response } from "express";
import { service } from "./service";
import { schema } from "./schema";

export const controller = {
  async getCounts(req: Request, res: Response) {
    try {
      const result = await service.getCounts();
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
