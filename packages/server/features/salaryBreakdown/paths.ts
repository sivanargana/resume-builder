export const salaryBreakdownPaths = {
  "/api/salary-breakdown": {
    get: {
      tags: ["SalaryBreakdown"],
      summary: "Get all salary breakdowns",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["SalaryBreakdown"],
      summary: "Create salary breakdown",
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
  "/api/salary-breakdown/{id}": {
    get: {
      tags: ["SalaryBreakdown"],
      summary: "Get salary breakdown by id",
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
      tags: ["SalaryBreakdown"],
      summary: "Update salary breakdown",
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
      tags: ["SalaryBreakdown"],
      summary: "Delete salary breakdown",
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
