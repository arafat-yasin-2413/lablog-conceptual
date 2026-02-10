import { Request, RequestHandler, Response } from "express";
import { prisma } from "../../lib/prisma";

const getUsageLog = async (req: Request, res: Response) => {
    try {
        const log = await prisma.usageLog.findMany({
            include: { user: true, equipment: true },
        });
        res.send({
            message: "Got all logs Successfully",
            data: log,
        });
    } catch (error) {
        res.send({ message: "Get Log Error", error });
    }
};

const createUsageLog = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const log = await prisma.usageLog.create({
            data: { ...payload, userId: req.user.id },
        });

        res.send({
            message: "Created Usage Log Successfully",
            data: log,
        });
    } catch (error) {
        res.send({ message: "Create Log Error", error });
    }
};

const updateUsageLog:RequestHandler = async(req, res)=>{
    const  {id}  = req.params;

    if(!id) {
        return res.send("Please Provide Id");
    }

    try{
        const log = await prisma.usageLog.update({
            where: {id},
            data: {
                endTime: new Date()
            },
        });

        res.send({ message: "UsageLog updated.", data: log});
    }
    catch(error){
        res.send({message: "Error Updating UsageLog"});
    }
}

export const usageLogController = {
    getUsageLog,
    createUsageLog,
    updateUsageLog,
};
