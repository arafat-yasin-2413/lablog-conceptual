import { Router, type Router as ExpressRouter } from "express";
import { equipmentController } from "./equipment.controller";


const equipmentRouter:ExpressRouter = Router();

equipmentRouter.get("/",equipmentController.getEquipments);
equipmentRouter.post("/", equipmentController.createEquipment);

export default equipmentRouter;