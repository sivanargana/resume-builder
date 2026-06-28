import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.headline.create({ data: body });
  },
  async read() {
    return await prisma.headline.findMany();
  },
  async single(id: any) {
    return await prisma.headline.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.headline.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    console.log(id);
    return await prisma.headline.delete({ where: { id } });
  },
};
