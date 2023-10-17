
import User from "../models/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { genneralAccessToken } from '../middlewares/jwtService.js'

export const registerUser = async (req, res) => {
  try {
    const newUser = new User(req.body)
    newUser.password = bcrypt.hashSync(req.body.password, 10)
    const checkEmail = await User.findOne({
      email: req.body.email
    })
    if (checkEmail) {
      return res.status(401).json("Email này đã có người sử dụng")
    }
    const saveUser = await newUser.save()
    return res.status(200).json(saveUser)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const loginUser = async (req, res) => {
  try {
    // const { email, password } = req.body

    const user = await User.findOne({email: req.body.email})


    if (!user) {
      return res.status(401).json('Sai email hoặc mật khẩu')
    }
    var isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json('Sai email hoặc mật khẩu')
    }
    const access_token = jwt.sign({ // gửi về 1 object
      id: user._id,
      isAdmin: user.isAdmin,
      role: user.role
    }, process.env.JWT_TOKEN_SECRET)
    const {password, ...otherDetails} = user._doc
    return res
    .cookie("access_token", access_token, {
      httpOnly: true,
    })
    .status(200)
    .json({
      user: otherDetails
    });
  } catch (err) {
    res.status(500).json(err)
  }
}