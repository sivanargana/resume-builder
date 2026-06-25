import { prisma } from "../../client";

export const service = {
  async login(body: any) {
    return await prisma.user.findUnique({ where: body });
  },
};
