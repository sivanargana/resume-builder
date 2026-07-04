import { Router } from "express";
import { controller } from "./controller";

export const router = Router();
router.post("/login", controller.login);
router.post("/login-with-google", controller.loginWithGoogle);
