import swaggerJSDoc from "swagger-jsdoc";

const idParam = (in_: "path" | "query" = "path") => [
  {
    name: "id",
    in: in_,
    required: true,
    schema: { type: "string" },
  },
];

const userBody = {
  type: "object",
  required: ["email", "password"],
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string" },
  },
};

const profileBody = {
  type: "object",
  required: ["userId", "firstName"],
  properties: {
    userId: { type: "string" },
    firstName: { type: "string" },
    lastName: { type: "string" },
    phone: { type: "string" },
    headline: { type: "string" },
    summary: { type: "string" },
  },
};

const skillBody = {
  type: "object",
  required: ["name", "profileId"],
  properties: {
    name: { type: "string" },
    profileId: { type: "string" },
  },
};

const educationBody = {
  type: "object",
  required: ["degree", "institute", "profileId"],
  properties: {
    degree: { type: "string" },
    institute: { type: "string" },
    profileId: { type: "string" },
  },
};

const experienceBody = {
  type: "object",
  required: ["company", "designation", "profileId"],
  properties: {
    company: { type: "string" },
    designation: { type: "string" },
    profileId: { type: "string" },
  },
};

const jsonBody = (schema: object) => ({
  required: true,
  content: { "application/json": { schema } },
});

const resumeResponse = (description: string) => ({
  description,
  content: {
    "application/json": {
      schema: { $ref: "#/components/schemas/Resume" },
    },
  },
});

const notFoundResponse = {
  description: "Not found",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: { error: { type: "string" } },
      },
    },
  },
};

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Resume Builder API",
      version: "1.0.0",
    },
    components: {
      schemas: {
        Skill: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            profileId: { type: "string" },
          },
        },
        Education: {
          type: "object",
          properties: {
            id: { type: "string" },
            degree: { type: "string" },
            institute: { type: "string" },
            profileId: { type: "string" },
          },
        },
        Experience: {
          type: "object",
          properties: {
            id: { type: "string" },
            company: { type: "string" },
            designation: { type: "string" },
            profileId: { type: "string" },
          },
        },
        Profile: {
          type: "object",
          properties: {
            id: { type: "string" },
            userId: { type: "string" },
            firstName: { type: "string" },
            lastName: { type: "string", nullable: true },
            phone: { type: "string", nullable: true },
            headline: { type: "string", nullable: true },
            summary: { type: "string", nullable: true },
            skills: { type: "array", items: { $ref: "#/components/schemas/Skill" } },
            education: { type: "array", items: { $ref: "#/components/schemas/Education" } },
            experience: { type: "array", items: { $ref: "#/components/schemas/Experience" } },
          },
        },
        User: {
          type: "object",
          properties: {
            id: { type: "string" },
            email: { type: "string", format: "email" },
            password: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
            profile: { $ref: "#/components/schemas/Profile" },
          },
        },
        Resume: {
          description: "User with their profile and all related skills, education, and experience",
          allOf: [{ $ref: "#/components/schemas/User" }],
        },
      },
    },
    paths: {
      "/api/users": {
        get: {
          tags: ["Users"],
          summary: "Get all users",
          responses: { 200: { description: "Success" } },
        },
        post: {
          tags: ["Users"],
          summary: "Create user",
          requestBody: jsonBody(userBody),
          responses: {
            201: { description: "Created" },
            409: { description: "Email already in use" },
          },
        },
      },
      "/api/users/{id}": {
        get: {
          tags: ["Users"],
          summary: "Get user by id (with full resume)",
          parameters: idParam(),
          responses: {
            200: resumeResponse("Full resume: user + profile + skills + education + experience"),
            404: notFoundResponse,
          },
        },
        put: {
          tags: ["Users"],
          summary: "Update user",
          parameters: idParam(),
          requestBody: jsonBody(userBody),
          responses: {
            200: resumeResponse("Updated user with full resume"),
            404: notFoundResponse,
          },
        },
        delete: {
          tags: ["Users"],
          summary: "Delete user",
          parameters: idParam(),
          responses: {
            204: { description: "Deleted" },
            404: notFoundResponse,
          },
        },
      },

      "/api/profiles": {
        get: {
          tags: ["Profiles"],
          summary: "Get all profiles",
          responses: { 200: { description: "Success" } },
        },
        post: {
          tags: ["Profiles"],
          summary: "Create profile",
          requestBody: jsonBody(profileBody),
          responses: { 201: { description: "Created" } },
        },
      },
      "/api/profiles/{id}": {
        get: {
          tags: ["Profiles"],
          summary: "Get profile by id (with skills, education, experience)",
          parameters: idParam(),
          responses: {
            200: {
              description: "Profile with nested skills, education, and experience",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Profile" },
                },
              },
            },
            404: notFoundResponse,
          },
        },
        put: {
          tags: ["Profiles"],
          summary: "Update profile",
          parameters: idParam(),
          requestBody: jsonBody(profileBody),
          responses: {
            200: { description: "Updated" },
            404: { description: "Not found" },
          },
        },
        delete: {
          tags: ["Profiles"],
          summary: "Delete profile",
          parameters: idParam(),
          responses: {
            204: { description: "Deleted" },
            404: { description: "Not found" },
          },
        },
      },

      "/api/skills": {
        get: {
          tags: ["Skills"],
          summary: "Get all skills",
          responses: { 200: { description: "Success" } },
        },
        post: {
          tags: ["Skills"],
          summary: "Create skill",
          requestBody: jsonBody(skillBody),
          responses: { 201: { description: "Created" } },
        },
      },
      "/api/skills/{id}": {
        get: {
          tags: ["Skills"],
          summary: "Get skill by id",
          parameters: idParam(),
          responses: {
            200: { description: "Success" },
            404: { description: "Not found" },
          },
        },
        put: {
          tags: ["Skills"],
          summary: "Update skill",
          parameters: idParam(),
          requestBody: jsonBody(skillBody),
          responses: {
            200: { description: "Updated" },
            404: { description: "Not found" },
          },
        },
        delete: {
          tags: ["Skills"],
          summary: "Delete skill",
          parameters: idParam(),
          responses: {
            204: { description: "Deleted" },
            404: { description: "Not found" },
          },
        },
      },

      "/api/educations": {
        get: {
          tags: ["Educations"],
          summary: "Get all educations",
          responses: { 200: { description: "Success" } },
        },
        post: {
          tags: ["Educations"],
          summary: "Create education",
          requestBody: jsonBody(educationBody),
          responses: { 201: { description: "Created" } },
        },
      },
      "/api/educations/{id}": {
        get: {
          tags: ["Educations"],
          summary: "Get education by id",
          parameters: idParam(),
          responses: {
            200: { description: "Success" },
            404: { description: "Not found" },
          },
        },
        put: {
          tags: ["Educations"],
          summary: "Update education",
          parameters: idParam(),
          requestBody: jsonBody(educationBody),
          responses: {
            200: { description: "Updated" },
            404: { description: "Not found" },
          },
        },
        delete: {
          tags: ["Educations"],
          summary: "Delete education",
          parameters: idParam(),
          responses: {
            204: { description: "Deleted" },
            404: { description: "Not found" },
          },
        },
      },

      "/api/experiences": {
        get: {
          tags: ["Experiences"],
          summary: "Get all experiences",
          responses: { 200: { description: "Success" } },
        },
        post: {
          tags: ["Experiences"],
          summary: "Create experience",
          requestBody: jsonBody(experienceBody),
          responses: { 201: { description: "Created" } },
        },
      },
      "/api/experiences/{id}": {
        get: {
          tags: ["Experiences"],
          summary: "Get experience by id",
          parameters: idParam(),
          responses: {
            200: { description: "Success" },
            404: { description: "Not found" },
          },
        },
        put: {
          tags: ["Experiences"],
          summary: "Update experience",
          parameters: idParam(),
          requestBody: jsonBody(experienceBody),
          responses: {
            200: { description: "Updated" },
            404: { description: "Not found" },
          },
        },
        delete: {
          tags: ["Experiences"],
          summary: "Delete experience",
          parameters: idParam(),
          responses: {
            204: { description: "Deleted" },
            404: { description: "Not found" },
          },
        },
      },
    },
  },
  apis: [],
});
