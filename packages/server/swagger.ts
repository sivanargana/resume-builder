import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
    },

    paths: {
      "/api/users": {
        get: {
          tags: ["Users"],
          summary: "Get all users",
          responses: {
            200: {
              description: "Success",
            },
          },
        },
        post: {
          tags: ["Users"],
          summary: "Create user",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["email", "password"],
                  properties: {
                    email: {
                      type: "string",
                      format: "email",
                    },
                    password: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Created",
            },
          },
        },
      },

      "/api/users/{id}": {
        get: {
          tags: ["Users"],
          summary: "Get user by id",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "Success",
            },
          },
        },
        put: {
          tags: ["Users"],
          summary: "Update user",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "Updated",
            },
          },
        },
        delete: {
          tags: ["Users"],
          summary: "Delete user",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            204: {
              description: "Deleted",
            },
          },
        },
      },

      "/api/profiles": {
        get: {
          tags: ["Profiles"],
          summary: "Get all profiles",
        },
        post: {
          tags: ["Profiles"],
          summary: "Create profile",
        },
      },

      "/api/profiles/{id}": {
        get: {
          tags: ["Profiles"],
          summary: "Get profile by id",
        },
        put: {
          tags: ["Profiles"],
          summary: "Update profile",
        },
        delete: {
          tags: ["Profiles"],
          summary: "Delete profile",
        },
      },

      "/api/skills": {
        get: {
          tags: ["Skills"],
          summary: "Get all skills",
        },
        post: {
          tags: ["Skills"],
          summary: "Create skill",
        },
      },

      "/api/skills/{id}": {
        get: {
          tags: ["Skills"],
          summary: "Get skill by id",
        },
        put: {
          tags: ["Skills"],
          summary: "Update skill",
        },
        delete: {
          tags: ["Skills"],
          summary: "Delete skill",
        },
      },

      "/api/educations": {
        get: {
          tags: ["Educations"],
          summary: "Get all educations",
        },
        post: {
          tags: ["Educations"],
          summary: "Create education",
        },
      },

      "/api/educations/{id}": {
        get: {
          tags: ["Educations"],
          summary: "Get education by id",
        },
        put: {
          tags: ["Educations"],
          summary: "Update education",
        },
        delete: {
          tags: ["Educations"],
          summary: "Delete education",
        },
      },

      "/api/experiences": {
        get: {
          tags: ["Experiences"],
          summary: "Get all experiences",
        },
        post: {
          tags: ["Experiences"],
          summary: "Create experience",
        },
      },

      "/api/experiences/{id}": {
        get: {
          tags: ["Experiences"],
          summary: "Get experience by id",
        },
        put: {
          tags: ["Experiences"],
          summary: "Update experience",
        },
        delete: {
          tags: ["Experiences"],
          summary: "Delete experience",
        },
      },
    }


  },
  apis: [],
});