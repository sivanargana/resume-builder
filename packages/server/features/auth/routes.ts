import { Router } from "express";
import { controller } from "./controller";

export const router = Router();
router.post("/register", controller.registerWithEmail);
router.post("/login", controller.loginWithEmail);
router.post("/continue-with-google", controller.continueWithGoogle);
