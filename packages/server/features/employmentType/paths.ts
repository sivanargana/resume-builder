export const employmentTypePaths = {
  "/api/employment-type": {
    get: {
      tags: ["EmploymentType"],
      summary: "Get all employment types",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["EmploymentType"],
      summary: "Create employment type",
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
  "/api/employment-type/{id}": {
    get: {
      tags: ["EmploymentType"],
      summary: "Get employment type by id",
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
      tags: ["EmploymentType"],
      summary: "Update employment type",
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
      tags: ["EmploymentType"],
      summary: "Delete employment type",
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
