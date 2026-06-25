export const paths = {
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
              required: [
                "fullName",
                "mobile",
                "email",
                "password",
                "workStatus",
              ],
              properties: {
                fullName: { type: "string" },
                mobile: { type: "string" },
                email: { type: "string", format: "email" },
                password: { type: "string", format: "password" },
                workStatus: {
                  type: "string",
                  enum: ["Fresher", "Experienced"],
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
      tags: ["Users"],
      summary: "Update user",
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
              required: ["fullName", "mobile", "email", "workStatus"],
              properties: {
                fullName: { type: "string" },
                mobile: { type: "string" },
                email: { type: "string", format: "email" },
                password: { type: "string", format: "password" },
                workStatus: {
                  type: "string",
                  enum: ["Fresher", "Experienced"],
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
      tags: ["Users"],
      summary: "Delete user",
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
