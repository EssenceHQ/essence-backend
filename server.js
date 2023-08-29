import express from "express";
import morgan from "morgan";
import conn from "./Db/conn.js";
import cors from "cors";
/**controllers */

import authRouter from "./Routes/authRoutes.js";

/** middleware */

import userRouter from "./Routes/userRoutes.js";
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.disable("x-powered-by");
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
