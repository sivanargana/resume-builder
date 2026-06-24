import swaggerJSDoc from "swagger-jsdoc";
import { userPaths } from "./features/users";
import { skillsPaths } from "./features/skills";
import { educationPaths } from "./features/education";
import { experiencePaths } from "./features/experience";
import { profilePaths } from "./features/profile";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Resume Builder API",
      version: "1.0.0",
    },

    paths: {
      ...userPaths,
      ...skillsPaths,
      ...educationPaths,
      ...experiencePaths,
      ...profilePaths,
    },
  },
  apis: [],
});
