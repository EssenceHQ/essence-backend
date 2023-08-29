import express from "express";
import User from "../model/UserModel.js";
import getUser from "../middleware/getUser.js";
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
authRouter.post("/register", async (req, res) => {
  try {
    const { userName, authId, email, stats, goals } = req.body;
    console.log(req.body);
    if (!userName || !authId || !email) {
      throw new Error("paramaters missing");
    }
    const user = new User({
      userName: userName,
      authId: authId,
      email: email,
      stats: stats,
      goals: goals,
    });
    user
      .save()
      .then(() => {
        res.status(200).json({ message: "Registered Successfully" });
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});
/*

    localhost:3000/auth/login

    request : {
  
    user: {},
   
  }
 */

authRouter.post("/login", getUser, async (req, res) => {
  const user = req.user;

  return res.status(200).json({ user: user });
});

export default authRouter;
