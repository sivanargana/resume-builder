export const paths = {
  "/api/education": {
    get: {
      tags: ["Education"],
      summary: "Get all education",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["Education"],
      summary: "Create education",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["degree", "institute", "profileId"],
              properties: {
                degree: {
                  type: "string",
                },
                institute: {
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

  "/api/education/{id}": {
    get: {
      tags: ["Education"],
      summary: "Get education by id",
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
      tags: ["Education"],
      summary: "Update education",
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
              required: ["degree", "institute", "profileId"],
              properties: {
                degree: {
                  type: "string",
                },
                institute: {
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
      tags: ["Education"],
      summary: "Delete education",
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
