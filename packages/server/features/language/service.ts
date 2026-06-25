import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.language.create({ data: body });
  },
  async read() {
    return await prisma.language.findMany();
  },
  async single(id: any) {
    return await prisma.language.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.language.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.language.delete({ where: { id } });
  },
};
