import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.workStatus.create({ data: body });
  },
  async read() {
    return await prisma.workStatus.findMany();
  },
  async single(id: any) {
    return await prisma.workStatus.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.workStatus.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.workStatus.delete({ where: { id } });
  },
};
