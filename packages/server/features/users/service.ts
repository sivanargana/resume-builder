import { prisma } from "../../client"


export const service = {
    async create(body:any){
         return await prisma.user.create(body)
    },
    async read(){ 
       return await prisma.user.findMany()
    },
    async update(body:any){},
    async delete(){},
}