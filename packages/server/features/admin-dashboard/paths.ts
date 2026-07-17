export const adminDashboardPaths = {
  "/api/admin-dashboard": {
    get: {
      tags: ["AdminDashboard"],
      summary: "Get admin dashboard counts",
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  users: { type: "number" },
                  skills: { type: "number" },
                  languages: { type: "number" },
                  proficiency: { type: "number" },
                  workStatus: { type: "number" },
                  experienceYear: { type: "number" },
                  experienceMonth: { type: "number" },
                  salaryBreakdown: { type: "number" },
                  availabilityType: { type: "number" },
                  employmentType: { type: "number" },
                  educationType: { type: "number" },
                },
              },
            },
          },
        },
      },
    },
  },
};
