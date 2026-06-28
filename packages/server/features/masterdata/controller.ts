import type { Request, Response } from "express";
import { service } from "./service";

export const controller = {
  async masterdata(req: Request & { user: any }, res: Response) {
    try {
      const result = await service.masterdata();
      if (!result) {
        return res.status(404).json({ errors: "Profile not found" });
      }
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
