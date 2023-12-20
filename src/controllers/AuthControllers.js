import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AccountManage from "../models/accountManagement"

import Staff from "../models/Staff"


export const registerUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(req.body.password, 10);
    const checkEmail = await User.findOne({
      email: req.body.email,
    });
    if (checkEmail) {
      return res.status(401).json("Email này đã có người sử dụng");
    }
    const saveUser = await newUser.save();
    return res.status(200).json({
      message: "Đăng Kí Thành Công"
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}


export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).populate(
      "id_package"
    );
    if (!user) {
      return res.status(401).json("wrong email or password");
    }
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json("wrong email or password");
    }
    const access_token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin
      },
      process.env.JWT_TOKEN_SECRET
    );
    const { password, ...otherDetails } = user._doc;
    res
      .status(200).json({
        user: otherDetails,
        access_token: access_token
      })
  } catch (err) {
    res.status(500).json(err);
  }
}


// account manager chủ khách sạn
export const loginForAccountManage = async (req, res) => {
  try {
    const user = await AccountManage.findOne({ username: req.body.username, password: req.body.password }).populate("package")

    if (user.password !== req.body.password) {
      return res.status(400).json({ message: 'sai mat khau' })
    }
    const access_token_owner = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_TOKEN_SECRET_OWNER
    );

    return res
      .status(200).json({
        message: "Login success",
        user: user,
        access_token_owner: access_token_owner
      })


  } catch (err) {
    res.status(500).json(err);

  }

}


// login for receptin 

export const loginForReception = async (req, res, next) => {
  try {
    const staff = await AccountManage.findOne({ username: req.body.username, password: req.body.password }).populate("package")
    if (!staff) {
      return res.status(401).json("wrong email or password");
    }
    // if (staff.role !== "reception") {
    //   return res.status(401).json("Chủ khác sạn sai");
    // }
    const access_token_reception = jwt.sign(
      {
        id: staff._id,
        role: staff.role
      },
      process.env.JWT_TOKEN_SECRET_RECEPTION
    );
    return res
      .status(200).json({
        message: "Login success",
        user: staff,
        access_token_reception: access_token_reception
      })

  } catch (err) {
    res.status(500).json(err)
  }
}
