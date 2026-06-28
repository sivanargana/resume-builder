export const paths = {
  "/api/headline": {
    get: {
      tags: ["headline"],
      summary: "Get all headline",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["headline"],
      summary: "Create skill",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["value", "userId"],
              properties: {
                value: {
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

  "/api/headline/{id}": {
    get: {
      tags: ["headline"],
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
      tags: ["headline"],
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
              required: ["value", "userId"],
              properties: {
                value: {
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
      tags: ["headline"],
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
