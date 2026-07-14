import { prisma } from "../../client";

export const service = {
  async login(body: { email: string }) {
    return await prisma.user.findUnique({
      where: { email: body.email },
      include: {
        avtar: true,
      },
    });
  },
  async login2(body: { email: string }) {
    return await prisma.user.findUnique({
      where: { email: body.email },
      include: {
        avtar: true,
      },
    });
  },
  async register(body: any) {
    return await prisma.user.create({ data: body });
  },
  async createUser(body: any) {
    return await prisma.user.create({
      data: {
        email: body.email,
        firstName: body.given_name,
        lastName: body.family_name,
        picture: body.picture,
        provider: "GOOGLE",
      },
    });
  },
};
