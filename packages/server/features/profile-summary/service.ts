import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.profileSummary.create({ data: body });
  },
  async read() {
    return await prisma.profileSummary.findMany();
  },
  async single(id: any) {
    return await prisma.profileSummary.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.profileSummary.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    console.log(id);
    return await prisma.profileSummary.delete({ where: { id } });
  },
};
