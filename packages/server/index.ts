import express from "express";
import dotenv from "dotenv";
import userRouter from "./features/users/routes";
import profileRouter from "./features/profiles/routes";
import skillRouter from "./features/skills/routes";
import educationRouter from "./features/educations/routes";
import experienceRouter from "./features/experiences/routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/users", userRouter);
app.use("/api/profiles", profileRouter);
app.use("/api/skills", skillRouter);
app.use("/api/educations", educationRouter);
app.use("/api/experiences", experienceRouter);

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
  console.log(`Swagger Docs on http://localhost:${port}/docs`);
});
