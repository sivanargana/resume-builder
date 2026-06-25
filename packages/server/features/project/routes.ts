import { Router } from "express";
import { controller } from "./controller";

export const router = Router();
router.post("/", controller.create);
router.get("/", controller.read);
router.get("/:id", controller.single);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
