import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.proficiency.create({ data: body });
  },
  async read() {
    return await prisma.proficiency.findMany();
  },
  async single(id: any) {
    return await prisma.proficiency.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.proficiency.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.proficiency.delete({ where: { id } });
  },
};
