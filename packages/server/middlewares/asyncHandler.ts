import type { NextFunction, Request, Response } from "express";

export const asyncHandler =
  (fn: any, schema?: any, data?: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    if (schema) {
      const result = schema.safeParse(data || req.body);
      if (schema && !result.success) {
        return res.status(400).json({
          errors: result.error.flatten().fieldErrors,
        });
      }
    }

    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  };
