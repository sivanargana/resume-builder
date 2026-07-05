import type { Request, Response } from "express";
import { service } from "./service";
import { schema } from "./schema";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const controller = {
  // Login
  async registerWithEmail(req: Request, res: Response) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    let result = await service.register(req.body);
    try {
      res.status(201).json(result);
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
  async loginWithEmail(req: Request, res: Response) {
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
      let result = await service.login({ email: req.body.email });
      if (!result) {
        result = await service.createUser(req.body);
      }
      let token = jwt.sign({ id: result.id, email: result.email }, process.env.JWT_SECRET_KEY ?? "");
      res.status(200).json({ token, role: result.role });
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
