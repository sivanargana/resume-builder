import { prisma } from "../../client";

export const service = {
  async create(body: { degree: string; institute: string; profileId: string }) {
    return prisma.education.create({ data: body });
  },

  async read() {
    return prisma.education.findMany();
  },

  async update(
    id: string,
    body: Partial<{ degree: string; institute: string }>,
  ) {
    return prisma.education.update({ where: { id }, data: body });
  },

  async delete(id: string) {
    await prisma.education.delete({ where: { id } });
  },
};
