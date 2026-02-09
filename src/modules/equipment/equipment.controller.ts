import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const createEquipment = async (req:Request, res:Response)=>{
    try{
        const payload = req.body;
        const equipment = await prisma.equipment.create({
            data: payload,
        });

        res.send({
            message: "Equipment Added",
            data: equipment
        });
    }
    catch(error){
        console.error(error);
    }
}


export const equipmentController = {
    createEquipment
}