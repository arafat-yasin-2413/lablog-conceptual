import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userServices } from "./user.service";


const getAllUser = async(req: Request, res: Response) =>{
    try{
        const allUser = await prisma.user.findMany();
        res.send({
            message: "Got all users successfully",
            data: allUser
        });
    }
    catch(error){
        res.send(error)
    }
}


const register = async(req:Request, res:Response)=>{
    const payload = req.body;

    const user = await userServices.register(payload);

    res.send({
        message: "Registerd Successfully", 
        data: user
    })
}


const login = async (req: Request, res:Response)=>{

    const { email , password } = req.body;

    const token = await userServices.login(email as string, password as string)
    
    res.send({
        message: "Logged in Successfully",
        token
    })
    
}

export const userControllers = {
    getAllUser,
    register,
    login,

}