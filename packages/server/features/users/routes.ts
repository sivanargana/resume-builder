import { Router } from "express";
import { controller } from "./controller";

 
const router = Router();

router.post("/",controller.create)
router.get("/",controller.read)
router.put("/",controller.update)
router.delete("/",controller.delete)


export default router