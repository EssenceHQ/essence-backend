import express from "express";
import User from "../model/UserModel.js";

const userRouter = express.Router();

/*

  localhost:3000/user/:id

  params : {

    "date":"02-08-2023",
    "incrementTime":30,
    "detect" : 0
}

  query : {
    stats : true
    
  }
 */
userRouter.put("/:id", async (req, res) => {
  const userId = req.params.id;

  const { date, incrementTime, detect } = req.body;
  try {
    const user = await User.findById(userId);
    console.log(user);
    const statsArray = user.stats;
    const index = statsArray.findIndex((element) => {
      return element.date === date;
    });
    if (index >= 0) {
      // update the previous stats for that day

      user.stats[index] = {
        date: user.stats[index].date,
        time: user.stats[index].time + incrementTime,
        detect: user.stats[index].detect + detect,
      };
    } else {
      // create new information for that date
      if (statsArray.length === 8) {
        statsArray.splice(0, 1);
      }
      const newArray = [...statsArray];
      newArray.push({ date: date, time: incrementTime, detect: detect });
      user.stats = newArray;
    }
    const goalIndex = user.goals.findIndex((element) => {
      return element.data === data;
    });

    if (goalIndex >= 0) {
      if (user.stats[index].time >= user.goals[goalIndex].time) {
        user.goals[goalIndex] = {
          acheived: true,
          date: user.goals[goalIndex].time,
          goalTime: user.goals[goalIndex].goalTime,
        };
      }
    }
    await user
      .save()
      .then((data) => {
        console.log("successfull saved the data: ", data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
});

userRouter.put("/updateUser/:id", async (req, res) => {
  const userId = req.params.id;
  const { date, goal } = req.body;

  try {
    const user = await User.findById(userId);
  } catch (error) {}
});

export default userRouter;
