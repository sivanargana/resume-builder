import type { Request, Response } from "express";
import { service } from "./service";
import { schema } from "./schema";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const controller = {
  // Login
  async login(req: Request, res: Response) {
    const response = schema.login.safeParse(req.body);
    if (!response.success) {
      return res.status(400).json({
        errors: response.error.issues,
      });
    }
    try {
      let result = await service.login(response.data);

      if (!result) {
        return res.status(404).json({ errors: "User Not Found" });
      }

      // const isMatch = await bcrypt.compare(req.body.password, result.password);

      // if (!isMatch) {
      //   return res.status(404).json({ errors: "Invalid credentials" });
      // }

      let token = jwt.sign(
        { email: result?.email },
        process.env.JWT_SECRET_KEY ?? "",
      );

      res.status(201).json({ token });
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
