import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const getUsageLog = async (req: Request, res: Response) => {
    try {
        const log = await prisma.usageLog.findMany({
            include: {user: true, equipment: true}
        });
        res.send({
            message: "Got all logs Successfully",
            data: log
        })

    } catch (error) {
        res.send({message:"Get Log Error", error});
    }
};

const createUsageLog = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const log = await prisma.usageLog.create({
            data: payload,
        });

        res.send({
            message: "Created Usage Log Successfully",
            data: log,
        });
    } catch (error) {
        res.send({message:"Create Log Error", error});
    }
};

export const usageLogController = {
    getUsageLog,
    createUsageLog,
};
