import { prisma } from "../../client";

export const service = {
  async create(body: { name: string; profileId: string }) {
    return prisma.skill.create({ data: body });
  },

  async read() {
    return prisma.skill.findMany();
  },

  async update(id: string, body: Partial<{ name: string }>) {
    return prisma.skill.update({ where: { id }, data: body });
  },

  async delete(id: string) {
    await prisma.skill.delete({ where: { id } });
  },
};
