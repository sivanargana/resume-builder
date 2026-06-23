import { prisma } from "../../client";

export const service = {
  async create(body: { company: string; designation: string; profileId: string }) {
    return prisma.experience.create({ data: body });
  },

  async read() {
    return prisma.experience.findMany();
  },

  async update(
    id: string,
    body: Partial<{ company: string; designation: string }>,
  ) {
    return prisma.experience.update({ where: { id }, data: body });
  },

  async delete(id: string) {
    await prisma.experience.delete({ where: { id } });
  },
};
