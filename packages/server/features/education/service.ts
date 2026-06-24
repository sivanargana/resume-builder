import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.education.create({ data: body });
  },
  async read() {
    return await prisma.education.findMany();
  },
  async single(id: any) {
    return await prisma.education.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.education.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.education.delete({ where: { id } });
  },
};
