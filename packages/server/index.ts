import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";

import { userRoutes } from "./features/users";
import { skillsRoutes } from "./features/skills";
import { educationRoutes } from "./features/education";
import { experienceRoutes } from "./features/experience";
import { profileRoutes } from "./features/profile";
import { authRoutes } from "./features/auth";
import { isAuthenticated } from "./middlewares/authentication";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/profile", isAuthenticated, profileRoutes);

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
  console.log(`Swagger Docs on http://localhost:${port}/docs`);
});
