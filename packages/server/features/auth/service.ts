import { prisma } from "../../client";

export const service = {
  async login(body: { email: string }) {
    return await prisma.user.findUnique({ where: { email: body.email } });
  },
};
