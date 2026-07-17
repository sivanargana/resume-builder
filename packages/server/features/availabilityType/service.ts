import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    return await prisma.availabilityType.create({ data: body });
  },
  async read() {
    return await prisma.availabilityType.findMany();
  },
  async single(id: any) {
    return await prisma.availabilityType.findUnique({ where: { id } });
  },
  async update(id: any, body: any) {
    return await prisma.availabilityType.update({ where: { id }, data: body });
  },
  async delete(id: any) {
    return await prisma.availabilityType.delete({ where: { id } });
  },
};
