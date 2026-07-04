import { Router } from "express";
import { controller } from "./controller";
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `${Date.now()}${ext}`;
    cb(null, fileName);
  },
});

export const upload = multer({ storage });

export const router = Router();
router.post("/", upload.single("image"), controller.create as any);
router.get("/", controller.read);
router.get("/:id", controller.single);
router.put("/:id", upload.single("image"), controller.update as any);
router.delete("/:id", controller.delete as any);
