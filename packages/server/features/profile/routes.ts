import { Router } from "express";
import { controller } from "./controller";

export const router = Router();
router.get("/", controller.profile as any);
router.post("/resume", controller.resume as any);
