

export const paths = {
  "/api/profile": {
    get: {
      tags: ["Profile"],
      summary: "Get all profile",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["Profile"],
      summary: "Create profile",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["firstName", "lastName", "phone", "headline", "summary", "userId"],
              properties: {
                firstName: {
                  type: "string",
                },
                lastName: {
                  type: "string",
                },
                phone: {
                  type: "string",
                },
                headline: {
                  type: "string",
                },
                summary: {
                  type: "string",
                },
                userId: {
                  type: "string",
                  format: "cuid"
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

  "/api/profile/{id}": {
    get: {
      tags: ["Profile"],
      summary: "Get profile by id",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            format: "cuid"
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
      tags: ["Profile"],
      summary: "Update profile",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            format: "cuid"
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["firstName", "lastName", "phone", "headline", "summary", "userId"],
              properties: {
                firstName: {
                  type: "string",
                },
                lastName: {
                  type: "string",
                },
                phone: {
                  type: "string",
                },
                headline: {
                  type: "string",
                },
                summary: {
                  type: "string",
                },
                userId: {
                  type: "string",
                  format: "cuid"
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
      tags: ["Profile"],
      summary: "Delete profile",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            format: "cuid"
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
}

