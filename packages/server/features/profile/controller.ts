import type { Request, Response } from "express";
import { service } from "./service";

export const controller = {
  // Read full profile (user + 1:1 relations + children)
  async profile(req: Request & { user: any }, res: Response) {
    try {
      const result = await service.read(req.user.id);
      if (!result) {
        return res.status(404).json({ errors: "Profile not found" });
      }
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
