import { prisma } from "../../client"


export const service = {
    async create(body:any){
        console.log({data:body})
       return await prisma.user.create({data:body})
    },
    async read(){ 
       return await prisma.user.findMany()
    },
    async update(body:any){},
    async delete(){},
}