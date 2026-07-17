import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.educationType.create({ data: body });
  },
  async read() {
    return await prisma.educationType.findMany();
  },
  async single(id: any) {
    return await prisma.educationType.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.educationType.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.educationType.delete({ where: { id } });
  },
};
