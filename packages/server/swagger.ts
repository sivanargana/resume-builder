import swaggerJSDoc from "swagger-jsdoc";
import { userPaths } from "./features/users";
import { skillsPaths } from "./features/skills";
import { educationPaths } from "./features/education";
import { experiencePaths } from "./features/experience";
import { projectPaths } from "./features/project";
import { languagePaths } from "./features/language";
import { profilePaths } from "./features/profile";
import { authPaths } from "./features/auth";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Resume Builder API",
      version: "1.0.0",
    },

    paths: {
      ...authPaths,
      ...userPaths,
      ...skillsPaths,
      ...educationPaths,
      ...experiencePaths,
      ...projectPaths,
      ...languagePaths,
      ...profilePaths,
    },
  },
  apis: [],
});
