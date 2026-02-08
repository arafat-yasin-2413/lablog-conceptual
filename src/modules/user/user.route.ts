import { Router, type Router as ExpressRouter } from "express";
import { userControllers } from "./user.controller";


const userRouter:ExpressRouter = Router();

userRouter.post("/register",userControllers.register);


export default userRouter;