import type { Request, Response } from "express";
import { service } from "./service";
import { schema } from "./schema";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.CLIENT_ID);

export const controller = {
  async registerWithEmail(req: Request, res: Response) {
    const response = schema.register.safeParse(req.body);
    if (!response.success) {
      return res.status(400).json({
        errors: response.error.issues,
      });
    }
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      let result = await service.register(req.body);
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
      res.status(200).json({ token, user: result });
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
  async continueWithGoogle(req: Request, res: Response) {
    try {
      let finalUser: any = null;

      const ticket = await client.verifyIdToken({
        idToken: req.body.credential,
        audience: process.env.CLIENT_ID,
      });

      let unkownUser: any = ticket.getPayload();

      let existingUser: any = await service.login({ email: unkownUser.email });
      let newGoogleUser: any = !existingUser ? await service.createUser({ provider: "GOOGLE", ...unkownUser }) : null;
      if (newGoogleUser) {
        finalUser = newGoogleUser;
      } else {
        finalUser = existingUser;
      }
      let token = jwt.sign({ id: finalUser.id, email: finalUser.email }, process.env.JWT_SECRET_KEY ?? "");
      delete finalUser.password;
      res.status(200).json({ token, user: finalUser });
    } catch (err) {
      return res.status(500).json({ errors: err });
    }
  },
};
