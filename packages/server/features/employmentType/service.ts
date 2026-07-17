import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.employmentType.create({ data: body });
  },
  async read() {
    return await prisma.employmentType.findMany();
  },
  async single(id: any) {
    return await prisma.employmentType.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.employmentType.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.employmentType.delete({ where: { id } });
  },
};
