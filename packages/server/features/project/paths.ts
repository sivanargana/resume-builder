export const paths = {
  "/api/project": {
    get: {
      tags: ["Project"],
      summary: "Get all projects",
      responses: { 200: { description: "Success" } },
    },
    post: {
      tags: ["Project"],
      summary: "Create project",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["title", "userId"],
              properties: {
                title: { type: "string" },
                client: { type: "string" },
                status: { type: "string" },
                startYear: { type: "integer" },
                endYear: { type: "integer" },
                details: { type: "string" },
                location: { type: "string" },
                site: { type: "string" },
                type: { type: "string" },
                teamSize: { type: "integer" },
                role: { type: "string" },
                roleDescription: { type: "string" },
                skillsUsed: { type: "string" },
                userId: { type: "string", format: "cuid" },
              },
            },
          },
        },
      },
      responses: { 201: { description: "Created" } },
    },
  },

  "/api/project/{id}": {
    get: {
      tags: ["Project"],
      summary: "Get project by id",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string", format: "cuid" },
        },
      ],
      responses: { 200: { description: "Success" } },
    },
    put: {
      tags: ["Project"],
      summary: "Update project",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string", format: "cuid" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["title", "userId"],
              properties: {
                title: { type: "string" },
                client: { type: "string" },
                status: { type: "string" },
                startYear: { type: "integer" },
                endYear: { type: "integer" },
                details: { type: "string" },
                location: { type: "string" },
                site: { type: "string" },
                type: { type: "string" },
                teamSize: { type: "integer" },
                role: { type: "string" },
                roleDescription: { type: "string" },
                skillsUsed: { type: "string" },
                userId: { type: "string", format: "cuid" },
              },
            },
          },
        },
      },
      responses: { 200: { description: "Updated" } },
    },
    delete: {
      tags: ["Project"],
      summary: "Delete project",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string", format: "cuid" },
        },
      ],
      responses: { 204: { description: "Deleted" } },
    },
  },
};
