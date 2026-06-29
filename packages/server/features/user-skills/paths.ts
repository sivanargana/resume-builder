export const paths = {
  "/api/user-skills": {
    get: {
      tags: ["User Skills"],
      summary: "Get all skills",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["User Skills"],
      summary: "Create skill",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "userId"],
              properties: {
                name: {
                  type: "string",
                },
                userId: {
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
  "/api/user-skills/many": {
    post: {
      tags: ["User Skills"],
      summary: "Post Many Skulls",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["skills"],
              properties: {
                skills: {
                  type: "array",
                  items: {
                    type: "object",
                    additionalProperties: true,
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Success",
        },
      },
    },
  },

  "/api/user-skills/{id}": {
    get: {
      tags: ["User Skills"],
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
      tags: ["User Skills"],
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
              required: ["name", "userId"],
              properties: {
                name: {
                  type: "string",
                },
                userId: {
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
      tags: ["User Skills"],
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
