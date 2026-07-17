export const availabilityTypePaths = {
  "/api/availability-type": {
    get: {
      tags: ["AvailabilityType"],
      summary: "Get all availability types",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["AvailabilityType"],
      summary: "Create availability type",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name"],
              properties: {
                name: { type: "string" },
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
  "/api/availability-type/{id}": {
    get: {
      tags: ["AvailabilityType"],
      summary: "Get availability type by id",
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
      tags: ["AvailabilityType"],
      summary: "Update availability type",
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
              required: ["name"],
              properties: {
                name: { type: "string" },
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
      tags: ["AvailabilityType"],
      summary: "Delete availability type",
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
          description: "Deleted",
        },
      },
    },
  },
};
