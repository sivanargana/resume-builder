import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.experienceMonth.create({ data: body });
  },
  async read() {
    return await prisma.experienceMonth.findMany();
  },
  async single(id: any) {
    return await prisma.experienceMonth.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.experienceMonth.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.experienceMonth.delete({ where: { id } });
  },
};
