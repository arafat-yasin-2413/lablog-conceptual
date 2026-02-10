import { Router, type Router as ExpressRouter } from "express";
import { userControllers } from "./user.controller";


const userRouter:ExpressRouter = Router();

userRouter.get("/", userControllers.getAllUser);
userRouter.post("/register",userControllers.register);
userRouter.post("/login", userControllers.login);


export default userRouter;