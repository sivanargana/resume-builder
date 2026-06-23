import express from "express";
import dotenv from "dotenv";
import userRouter from "./features/users/routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
dotenv.config()
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
   "/docs",
   swaggerUi.serve,
   swaggerUi.setup(swaggerSpec)
);

app.use("/api/users", userRouter);

app.listen(port, () => {
   console.log(`Server Running on http://localhost:${port}`)
   console.log(`Swagger Docs on http://localhost:${port}/docs`)
})