import type { Request, Response } from "express"
import { service } from "./service"

export const controller = {
    async create(req: Request, res: Response) {
        return await service.create(req.body)
        res.json([])
    },
    async read(req: Request, res: Response) {
       let  result = await service.read();
       res.json(result)
    },
    async update(req: Request, res: Response) {
        return await service.update(req.body);
        res.json([])
    },
    async delete(req: Request, res: Response) {
        return await service.delete()
        res.json([])
    },
}