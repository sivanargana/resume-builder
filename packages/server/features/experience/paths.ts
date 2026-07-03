export const paths = {
  "/api/experience": {
    get: {
      tags: ["Experience"],
      summary: "Get all experience",
      responses: {
        200: {
          description: "Success",
        },
      },
    },
    post: {
      tags: ["Experience"],
      summary: "Create experience",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["companyName", "employmentTypeId", "isCurrentEmployment", "jobTitle", "jobProfile"],
              properties: {
                companyName: { type: "string" },
                employmentTypeId: { type: "string" },
                isCurrentEmployment: { type: "boolean" },
                jobTitle: { type: "string" },
                joiningDate: { type: "string" },
                workedTill: { type: "string" },
                jobProfile: { type: "string" },
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

  "/api/experience/{id}": {
    get: {
      tags: ["Experience"],
      summary: "Get experience by id",
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
      tags: ["Experience"],
      summary: "Update experience",
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
              required: ["companyName", "employmentTypeId", "isCurrentEmployment", "jobTitle", "jobProfile"],
              properties: {
                companyName: { type: "string" },
                employmentTypeId: { type: "string" },
                isCurrentEmployment: { type: "boolean" },
                jobTitle: { type: "string" },
                joiningDate: { type: "string" },
                workedTill: { type: "string" },
                jobProfile: { type: "string" },
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
      tags: ["Experience"],
      summary: "Delete experience",
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
