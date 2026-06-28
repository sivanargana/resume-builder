export const paths = {
  "/api/profile-summary": {
    get: {
      tags: ["summary"],
      summary: "Get all summary",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["summary"],
      summary: "Create skill",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["summary", "userId"],
              properties: {
                summary: {
                  type: "string",
                },
                userId: {
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

  "/api/profile-summary/{id}": {
    get: {
      tags: ["summary"],
      summary: "Get skill by id",
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
      tags: ["summary"],
      summary: "Update skill",
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
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["summary", "userId"],
              properties: {
                summary: {
                  type: "string",
                },
                userId: {
                  type: "string",
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
      tags: ["summary"],
      summary: "Delete skill",
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
};
