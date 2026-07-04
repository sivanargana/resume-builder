import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.avtar.create({ data: body });
  },
  async read() {
    return await prisma.avtar.findMany();
  },
  async single(id: any) {
    return await prisma.avtar.findUnique({ where: { id } });
  },
  async getImage(userId: any) {
    return await prisma.avtar.findUnique({ where: { userId } });
  },
  async update(id: any, body: any) {
    return await prisma.avtar.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.avtar.delete({ where: { id } });
  },
};
