export const paths = {
  "/api/profile/{id}": {
    get: {
      tags: ["Profile"],
      summary: "Get full profile by user id (user + basicDetails + headline + profileSummary + skills + educations + experiences + projects + languages)",
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
        200: { description: "Success" },
        404: { description: "Profile not found" },
      },
    },
    put: {
      tags: ["Profile"],
      summary: "Update user and 1:1 relations (basicDetails, headline, profileSummary)",
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
                workStatus: {
                  type: "string",
                  enum: ["Fresher", "Experienced"],
                },
                headline: { type: "string" },
                profileSummary: { type: "string" },
                basicDetails: {
                  type: "object",
                  properties: {
                    photo: { type: "string" },
                    experienceYears: { type: "integer" },
                    experienceMonths: { type: "integer" },
                    salaryAmount: { type: "integer" },
                    salaryBreakdown: {
                      type: "string",
                      enum: ["fixed", "ctc"],
                    },
                    country: { type: "string" },
                    location: { type: "string" },
                    availability: { type: "string" },
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Updated" },
      },
    },
  },
};
