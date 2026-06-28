import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    console.log(body);
    return await prisma.basicDetails.create({ data: body });
  },
  async read() {
    return await prisma.basicDetails.findMany();
  },
  async single(id: any) {
    return await prisma.basicDetails.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.basicDetails.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.basicDetails.delete({ where: { id } });
  },
};
