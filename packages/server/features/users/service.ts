import bcrypt from "bcryptjs";
import { prisma } from "../../client";

export const service = {
  async create(body: any) {
    const { password, ...rest } = body;
    const hashed = await bcrypt.hash(password, 10);
    return await prisma.user.create({
      data: { ...rest, password: hashed },
      select: {
        id: true,
        fullName: true,
        mobile: true,
        email: true,
        workStatus: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },
  async read() {
    return await prisma.user.findMany({
      select: {
        id: true,
        fullName: true,
        mobile: true,
        email: true,
        workStatus: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },
  async single(id: any) {
    return await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        fullName: true,
        mobile: true,
        email: true,
        workStatus: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },
  async update(id: any, body: any) {
    const { password, ...rest } = body;
    const data: any = { ...rest };
    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }
    return await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        fullName: true,
        mobile: true,
        email: true,
        workStatus: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  },
  async delete(id: any) {
    return await prisma.user.delete({ where: { id } });
  },
};
