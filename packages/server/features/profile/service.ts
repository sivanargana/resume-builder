import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.profile.create({ data: body });
  },
  async read() {
    return await prisma.profile.findMany();
  },
  async single(id: any) {
    return await prisma.profile.findUnique({
      where: { id },
      include: {
        user: true,
        skills: true,
        education: true,
        experience: true,
      },
    });
  },
  async update(id: any, body: any) {
    return await prisma.profile.upsert({
      where: { id },
      create: body,
      update: body,
    });
  },

  async delete(id: any) {
    return await prisma.profile.delete({ where: { id } });
  },
};
