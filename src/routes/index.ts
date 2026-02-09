import { Router , type Router as ExpressRouter} from "express";
import userRouter from "../modules/user/user.route";
import equipmentRouter from "../modules/equipment/equipment.route";
import usageLogRouter from "../modules/usage-log/log.route";

const routes:ExpressRouter = Router();

routes.use("/user", userRouter);
routes.use("/equipment", equipmentRouter);
routes.use("/usageLog", usageLogRouter)

export default routes;