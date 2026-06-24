export const paths = {
  "/api/skills": {
    get: {
      tags: ["Skills"],
      summary: "Get all skills",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["Skills"],
      summary: "Create skill",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "profileId"],
              properties: {
                name: {
                  type: "string",
                },
                profileId: {
                  type: "string",
                  format: "cuid",
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

  "/api/skills/{id}": {
    get: {
      tags: ["Skills"],
      summary: "Get skill by id",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            format: "cuid",
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
      tags: ["Skills"],
      summary: "Update skill",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            format: "cuid",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "profileId"],
              properties: {
                name: {
                  type: "string",
                },
                profileId: {
                  type: "string",
                  format: "cuid",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Updated",
        },
      },
    },
    delete: {
      tags: ["Skills"],
      summary: "Delete skill",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            format: "cuid",
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
};
