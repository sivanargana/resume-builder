export const paths = {
  "/api/language": {
    get: {
      tags: ["Language"],
      summary: "Get all languages",
      responses: { 200: { description: "Success" } },
    },
    post: {
      tags: ["Language"],
      summary: "Create language",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: [
                "name",
                "proficiency",
                "read",
                "write",
                "speak",
                "userId",
              ],
              properties: {
                name: { type: "string" },
                proficiency: {
                  type: "string",
                  enum: ["beginner", "proficient", "expert"],
                },
                read: { type: "boolean" },
                write: { type: "boolean" },
                speak: { type: "boolean" },
                userId: { type: "string", format: "cuid" },
              },
            },
          },
        },
      },
      responses: { 201: { description: "Created" } },
    },
  },

  "/api/language/{id}": {
    get: {
      tags: ["Language"],
      summary: "Get language by id",
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
      tags: ["Language"],
      summary: "Update language",
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
              required: [
                "name",
                "proficiency",
                "read",
                "write",
                "speak",
                "userId",
              ],
              properties: {
                name: { type: "string" },
                proficiency: {
                  type: "string",
                  enum: ["beginner", "proficient", "expert"],
                },
                read: { type: "boolean" },
                write: { type: "boolean" },
                speak: { type: "boolean" },
                userId: { type: "string", format: "cuid" },
              },
            },
          },
        },
      },
      responses: { 200: { description: "Updated" } },
    },
    delete: {
      tags: ["Language"],
      summary: "Delete language",
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
