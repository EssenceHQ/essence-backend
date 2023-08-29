import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  authId: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  stats: {
    type: Array,
    default: [],
  },
  goals: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model("User", UserModel);

export default User;
