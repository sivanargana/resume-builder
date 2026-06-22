import { Router } from "express";
import { controller } from "./controller";

 
const router = Router();
/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Create User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/",controller.create)

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/",controller.read)
router.put("/",controller.update)
router.delete("/",controller.delete)


export default router