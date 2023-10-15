import User from "../models/User"
import Package from "../models/Package"
import bcrypt from "bcrypt"
import { genneralAccessToken, genneralRefreshToken } from '../middlewares/jwtService.js'

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json({
      errcode: 0,
      users: users
    })
  } catch (err) {
    console.log(err)
  }
}

export const registerUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body)
    newUser.password = bcrypt.hashSync(req.body.password, 10)
    const checkEmail = await User.findOne({
      email: req.body.email
    })
    if (checkEmail) {
      return res.status(401).json('the email is already')
    }
    const saveUser = await newUser.save()
    return res.status(200).json(saveUser)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json('Email khong ton tai')
    }
    var isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json('Mat khau sai')
    }
    const access_token = await genneralAccessToken({
      id: user,
      isAdmin: user.isAdmin
    })
    const refresh_token = await genneralRefreshToken({
      id: user,
      isAdmin: user.isAdmin
    })
    console.log(access_token);
    return res.status(200).json(access_token, refresh_token);
  } catch (err) {
    res.status(500).json(err)
  }
}

export const editUser = async (req, res, next) => {
  try {
    const useId = req.params.id
    const data = req.body
    // const update = await findByIdAndUpdate(useId, data, { new: true })
    console.log(useId);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    await Package.updateMany({ user: req.params.id }, { user: null })
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json('delete')
  } catch (err) {
    console.log(err);
  }
}