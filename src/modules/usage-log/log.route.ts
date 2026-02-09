import { Router, type Router as ExpressRouter } from "express";
import { usageLogController } from "./log.controller";



const usageLogRouter:ExpressRouter = Router();

usageLogRouter.get("/",usageLogController.getUsageLog);
usageLogRouter.post("/", usageLogController.createUsageLog);

export default usageLogRouter;
