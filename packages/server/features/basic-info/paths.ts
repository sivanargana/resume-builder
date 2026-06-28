export const paths = {
  "/api/basic-info": {
    get: {
      tags: ["basic"],
      summary: "Get all basic",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["basic"],
      summary: "Create basic",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["experienceYearId", "experienceMonthId", "salaryBreakdownId", "availabilityTypeId", "salaryAmount", "photo", "country", "location"],
              properties: {
                experienceYearId: { type: "string" },
                experienceMonthId: { type: "string" },
                salaryBreakdownId: { type: "string" },
                availabilityTypeId: { type: "string" },
                salaryAmount: { type: "string" },
                photo: { type: "string" },
                country: { type: "string" },
                location: { type: "string" },
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

  "/api/basic-info/{id}": {
    get: {
      tags: ["basic"],
      summary: "Get basic by id",
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
      tags: ["basic"],
      summary: "Update basic",
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
              required: ["experienceYearId", "experienceMonthId", "salaryBreakdownId", "availabilityTypeId", "salaryAmount", "photo", "country", "location"],
              properties: {
                experienceYearId: { type: "string" },
                experienceMonthId: { type: "string" },
                salaryBreakdownId: { type: "string" },
                availabilityTypeId: { type: "string" },
                salaryAmount: { type: "string" },
                photo: { type: "string" },
                country: { type: "string" },
                location: { type: "string" },
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
      tags: ["basic"],
      summary: "Delete basic",
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
