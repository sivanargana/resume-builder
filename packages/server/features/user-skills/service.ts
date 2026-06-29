import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.userSkill.create({ data: body });
  },
  async createMany(body: any) {
    console.log(body);
    return await prisma.userSkill.createMany({ data: body });
  },
  async read() {
    return await prisma.userSkill.findMany();
  },
  async single(id: any) {
    return await prisma.userSkill.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.userSkill.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.userSkill.delete({ where: { id } });
  },
};
