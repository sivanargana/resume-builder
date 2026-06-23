import { prisma } from "../../client";

export const service = {
  async create(body: {
    userId: string;
    firstName: string;
    lastName?: string;
    phone?: string;
    headline?: string;
    summary?: string;
  }) {
    return prisma.profile.create({ data: body });
  },

  async read() {
    return prisma.profile.findMany();
  },

  async readOne(id: string) {
    return prisma.profile.findUnique({
      where: { id },
      include: {
        skills: true,
        education: true,
        experience: true,
      },
    });
  },

  async update(
    id: string,
    body: Partial<{
      firstName: string;
      lastName: string;
      phone: string;
      headline: string;
      summary: string;
    }>,
  ) {
    return prisma.profile.update({ where: { id }, data: body });
  },

  async delete(id: string) {
    await prisma.profile.delete({ where: { id } });
  },
};
