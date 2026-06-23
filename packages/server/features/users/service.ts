import { prisma } from "../../client";

const profileInclude = {
  profile: {
    include: {
      skills: true,
      education: true,
      experience: true,
    },
  },
} as const;

export const service = {
  async create(body: { email: string; password: string }) {
    return prisma.user.create({ data: body });
  },

  async read() {
    return prisma.user.findMany();
  },

  async readOne(id: string) {
    return prisma.user.findUnique({ where: { id }, include: profileInclude });
  },

  async update(id: string, body: Partial<{ email: string; password: string }>) {
    await prisma.user.update({ where: { id }, data: body });
    return prisma.user.findUnique({ where: { id }, include: profileInclude });
  },

  async delete(id: string) {
    await prisma.user.delete({ where: { id } });
  },
};
