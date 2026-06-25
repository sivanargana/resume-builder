import { Router } from "express";
import { controller } from "./controller";

export const router = Router();
router.get("/:id", controller.read);
router.put("/:id", controller.update);
