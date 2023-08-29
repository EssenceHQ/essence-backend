import express from "express";
import User from "../model/UserModel.js";
import getUser from "../middleware/getUser.js";
import { registerUser, loginUser } from "../controller/authController.js";
const authRouter = express.Router();

/*

    localhost:3000/auth/register

    @params : {
    "userName": "saksham",
    "authId": "askdfjlasjfkasf",
    "email": "sakshamyogesh@gmail.com",
    "stats": [],
    "goals": []
  }
 */
authRouter.post("/register", registerUser);
/*

    localhost:3000/auth/login

    request : {
  
    user: {},
   
  }
 */

authRouter.post("/login", getUser, loginUser);

export default authRouter;
