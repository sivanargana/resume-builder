export const paths = {
  "/api/workStatus": {
    get: {
      tags: ["workStatus"],
      summary: "Get all workStatus",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["workStatus"],
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

  "/api/workStatus/{id}": {
    get: {
      tags: ["workStatus"],
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
      tags: ["workStatus"],
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
      tags: ["workStatus"],
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
