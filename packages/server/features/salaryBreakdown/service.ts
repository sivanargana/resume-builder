import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.salaryBreakdown.create({ data: body });
  },
  async read() {
    return await prisma.salaryBreakdown.findMany();
  },
  async single(id: any) {
    return await prisma.salaryBreakdown.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.salaryBreakdown.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.salaryBreakdown.delete({ where: { id } });
  },
};
