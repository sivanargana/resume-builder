import { prisma } from "../../client"


export const service = {
  async create(body: any) {
    return await prisma.experience.create({ data: body })
  },
  async read() {
    return await prisma.experience.findMany()
  },
  async single(id:any) {
    return await prisma.experience.findUnique({where:{id}})
  },
  async update(id: any, body: any) {
    return await prisma.experience.update({ where: {id}, data: body })
  },
  async delete(id: any) {
    return await prisma.experience.delete({ where: {id} })
  },
}