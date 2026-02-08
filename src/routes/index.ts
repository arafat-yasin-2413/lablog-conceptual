import { Router , type Router as ExpressRouter} from "express";
import userRouter from "../modules/user/user.route";

const routes:ExpressRouter = Router();

routes.use("/user", userRouter);

export default routes;