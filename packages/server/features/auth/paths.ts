export const paths = {
  "/api/auth/login": {
    post: {
      tags: ["Authentication"],
      summary: "Login",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password"],
              properties: {
                email: {
                  type: "string",
                  format: "email",
                },
                password: {
                  type: "string",
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
};
