 import express from "express";
 import dotenv from "dotenv"; 
import userRouter from "./features/users/routes";
 dotenv.config()
 const app = express();
 const port = process.env.PORT || 3000;
 

 app.use(express.json());

app.use("/api/users", userRouter);



 app.listen(port,()=>{
    console.log(`Server Running on http://loaclhost:${port}`)
 })