 import express, { type Request, type Response } from "express";
 import dotenv from "dotenv"; 
import { prisma } from "./client";
 dotenv.config()
 const app = express();
 const port = process.env.PORT || 3000;

 app.get("/",async (req:Request,res:Response)=>{

   let result = await prisma.profile.findMany();

   console.log(result)

    res.send(process.env.BASE_URL)

 })

 app.use(express.json());

// app.use("/api/users", userRoutes);



 app.listen(port,()=>{
    console.log(`Server Running on http://loaclhost:${port}`)
 })