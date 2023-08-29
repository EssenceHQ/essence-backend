import express from "express";
import User from "../model/UserModel.js";
import { updateUserTime } from "../controller/userController.js";
const userRouter = express.Router();

userRouter.put("/:id", updateUserTime);

export default userRouter;
