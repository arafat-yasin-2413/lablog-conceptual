import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../generated/prisma/client";


const register = async(payload: User) =>{
    const hashedPassword = await bcrypt.hash(payload.password, 10)

    const user = await prisma.user.create({
        data: {...payload, password: hashedPassword}
    });
    
    return user;
}


const login = async(email: string, password:string) =>{
    const user = await prisma.user.findUnique({where:{email}});

    if(!user) {
        throw new Error("Invalid User"); 
    }

    const matchPassword = await bcrypt.compare(password, user.password)

    if(!matchPassword) {
        throw new Error("Invalid Password");
    }

    const token = await jwt.sign({id: user.id, role: user.role }, "very secret",{expiresIn: "7d"} );

    return token;
}

export const userServices = {
    login, register
}