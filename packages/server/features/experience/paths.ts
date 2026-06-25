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
              required: ["isCurrentEmployment", "employmentType", "userId"],
              properties: {
                isCurrentEmployment: { type: "boolean" },
                employmentType: {
                  type: "string",
                  enum: [
                    "fulltime",
                    "internship",
                    "contract",
                    "parttime",
                    "freelance",
                  ],
                },
                companyName: { type: "string" },
                jobTitle: { type: "string" },
                department: { type: "string" },
                location: { type: "string" },
                joiningDate: { type: "string", format: "date-time" },
                workedTill: { type: "string", format: "date-time" },
                monthlyStipend: { type: "integer" },
                currentSalary: { type: "integer" },
                totalExperience: { type: "integer" },
                jobProfile: { type: "string" },
                noticePeriod: { type: "string" },
                userId: { type: "string", format: "cuid" },
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
              required: ["isCurrentEmployment", "employmentType", "userId"],
              properties: {
                isCurrentEmployment: { type: "boolean" },
                employmentType: {
                  type: "string",
                  enum: [
                    "fulltime",
                    "internship",
                    "contract",
                    "parttime",
                    "freelance",
                  ],
                },
                companyName: { type: "string" },
                jobTitle: { type: "string" },
                department: { type: "string" },
                location: { type: "string" },
                joiningDate: { type: "string", format: "date-time" },
                workedTill: { type: "string", format: "date-time" },
                monthlyStipend: { type: "integer" },
                currentSalary: { type: "integer" },
                totalExperience: { type: "integer" },
                jobProfile: { type: "string" },
                noticePeriod: { type: "string" },
                userId: { type: "string", format: "cuid" },
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
