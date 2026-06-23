import { Router } from "express";
import { controller } from "./controller";

const router = Router();

router.post("/", controller.create);
router.get("/", controller.read);
router.get("/:id", controller.readOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
