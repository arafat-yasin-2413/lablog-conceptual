import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

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

    const user = await prisma.user.create({
        data: payload
    });

    res.send({
        message: "Registerd Successfully", 
        data: user
    })
}

export const userControllers = {
    getAllUser,
    register,

}