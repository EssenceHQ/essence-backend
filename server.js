import express from "express";
import morgan from "morgan";
import conn from "./Db/conn.js";
import User from "./model/UserModel.js";

/**controllers */

import authRouter from "./controller/authController.js";

/** middleware */

import userRouter from "./controller/userController.js";
const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.status(404).json({ error: "page not found actually" });
});
conn()
  .then(() => {
    app.listen("3000", () => {
      console.log("server is up and running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
