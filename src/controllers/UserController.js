import User from "../models/User"

 
export const getAllUser = async (req, res, next) => {
  try {
    const users =await User.find()
    return res.status(200).json({
      errcode: 0,
      users: users
    })
  } catch (err) {
    console.log(err)
  }
}