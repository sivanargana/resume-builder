import swaggerJSDoc from "swagger-jsdoc";
import { userPaths } from "./features/users";
import { skillsPaths } from "./features/skills";
import { educationPaths } from "./features/education";
import { experiencePaths } from "./features/experience";
import { projectPaths } from "./features/project";
import { languagePaths } from "./features/language";
import { profilePaths } from "./features/profile";
import { authPaths } from "./features/auth";
import { workStatusPaths } from "./features/workStatus";
import { basicInfoPaths } from "./features/basic-info";
import { headlinePaths } from "./features/headline";
import { profileSummaryPaths } from "./features/profile-summary";
import { userSkillsPaths } from "./features/user-skills";

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
      ...workStatusPaths,
      ...basicInfoPaths,
      ...headlinePaths,
      ...profileSummaryPaths,
      ...userSkillsPaths,
    },
  },
  apis: [],
});
