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
      const result = await service.login(response.data);

      if (!result) {
        return res.status(404).json({ errors: "User Not Found" });
      }

      const isMatch = await bcrypt.compare(response.data.password, result.password);

      if (!isMatch) {
        return res.status(401).json({ errors: "Invalid credentials" });
      }

      let token = jwt.sign({ id: result.id, email: result.email }, process.env.JWT_SECRET_KEY ?? "");

      res.status(200).json({ token, role: result.role });
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
  async loginWithGoogle(req: Request, res: Response) {
    try {
      let googleUser: any = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", { headers: { Authorization: `Bearer ${req.body?.accessToken}` } }).then((res) => res.json());
      const result = await service.login({ email: googleUser.email });
      if (!result) {
        return res.status(404).json({ errors: "User Not Found" });
      }
      let token = jwt.sign({ id: result.id, email: result.email }, process.env.JWT_SECRET_KEY ?? "");
      res.status(200).json({ token, role: result.role });
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
