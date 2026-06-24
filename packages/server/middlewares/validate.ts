import type { NextFunction, Request, Response } from "express";

export const validate =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        errors: result.error.flatten().fieldErrors,
      });
    }

    req.body = result.data;
    next();
  };
