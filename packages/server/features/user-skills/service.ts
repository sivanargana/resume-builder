import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.userSkill.create({ data: body });
  },
  async createMany(body: any, user: any) {
    let current = await prisma.userSkill.findMany({ where: { userId: user.id } });
    const missing = current.filter((item: any) => !body.some((m: any) => m === item.skillId)).map((item: any) => item.skillId);
    const news = body.filter((item: any) => !current.some((m: any) => m.skillId === item)).map((item: any) => ({ skillId: item, userId: user.id }));
    const deleteing = await prisma.userSkill.deleteMany({ where: { skillId: { in: missing }, userId: user.id } });
    const adding = await prisma.userSkill.createMany({ data: news });
    return { deleteing, adding };
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
