import { Router } from "express";
import { controller } from "./controller";

export const router = Router();
router.post("/register-with-email", controller.registerWithEmail);
router.post("/login-with-email", controller.loginWithEmail);
router.post("/login-with-google", controller.loginWithGoogle);
