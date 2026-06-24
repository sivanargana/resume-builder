import { prisma } from "../../client"


export const service = {
  async create(body: any) {
    return await prisma.user.create({ data: body })
  },
  async read() {
    return await prisma.user.findMany()
  },
  async single(id:any) {
    return await prisma.user.findUnique({where:{id}})
  },
  async update(id: any, body: any) {
    return await prisma.user.update({ where: {id}, data: body })
  },
  async delete(id: any) {
    return await prisma.user.delete({ where: {id} })
  },
}