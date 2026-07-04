import type { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

export const isAuthenticated = (req: Request & { user?: any }, res: Response, next: NextFunction) => {
  let authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ errors: "Unauthorised!" });
  }

  let token: any = authorization?.replace(/Bearer /, "");

  jwt.verify(token, process.env.JWT_SECRET_KEY ?? "", (err: any, data: any) => {
    if (err) {
      return res.status(403).json({ errors: "Invalid or expired token" });
    }

    req.user = data;
    next();
  });
};
