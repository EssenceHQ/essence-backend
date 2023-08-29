import mongoose from "mongoose";

const conn = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://Essence:ESSENCE0000@cluster0.e40ujkn.mongodb.net/"
    );
    console.log("Db connected successfully");
  } catch (err) {
    console.log(err);
  }
};

export default conn;
