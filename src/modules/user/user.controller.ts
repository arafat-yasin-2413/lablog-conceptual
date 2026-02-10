import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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

    const hashedPassword = await bcrypt.hash(payload.password, 10)

    const user = await prisma.user.create({
        data: {...payload, password: hashedPassword}
    });

    res.send({
        message: "Registerd Successfully", 
        data: user
    })
}


const login = async (req: Request, res:Response)=>{

    const { email , password } = req.body;

    const user = await prisma.user.findUnique({where:{email}});

    if(!user) {
        return res.send({
            message: "User not found",
        })
    }

    const matchPassword = await bcrypt.compare(password, user.password)

    if(!matchPassword) {
        return res.send({
            message: "Invalid Password",
        })
    }

    const token = await jwt.sign({id: user.id, role: user.role }, "very secret",{expiresIn: "7d"} );

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