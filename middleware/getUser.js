import User from "../model/UserModel.js";
/*

@params : {
  
    "authId": "askdfjlasjfkasf",
   
  }
*/
const getUser = async (req, res, next) => {
  try {
    const authId = req.body.authId;
    if (!authId) {
      throw new Error("authId is missing");
    }
    const user = await User.findOne({ authId: authId });
    if (!user) {
      res.status(403).send({ error: "No User Found!" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export default getUser;
