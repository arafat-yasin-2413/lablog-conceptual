import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const getEquipments = async (req: Request, res: Response) => {
    try {
        const data = await prisma.equipment.findMany();

        res.send({
            message: "Got Equipments Successfully",
            data,
        });
    } catch (error) {
        console.error(error);
    }
};

const createEquipment = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const equipment = await prisma.equipment.create({
            data: payload,
        });

        res.send({
            message: "Equipment Added",
            data: equipment,
        });
    } catch (error) {
        console.error(error);
    }
};

export const equipmentController = {
    getEquipments,
    createEquipment,
};
