import { Router, type Router as ExpressRouter } from "express";
import { usageLogController } from "./log.controller";
import auth from "../../middleware/auth";
import { Role } from "../../generated/prisma/enums";



const usageLogRouter:ExpressRouter = Router();

usageLogRouter.get("/",usageLogController.getUsageLog);
usageLogRouter.post("/",auth([Role.Admin]), usageLogController.createUsageLog);
usageLogRouter.patch("/:id", usageLogController.updateUsageLog);

export default usageLogRouter;
