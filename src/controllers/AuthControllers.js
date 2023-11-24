import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AccountManage from "../models/accountManagement"
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
      message: "Đăng kí thành công",
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).populate(
      "id_package"
    );
    // console.log(user);
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
        // send 1 object
        id: user._id,
        isAdmin: user.isAdmin,
        role: user.role,
      },
      process.env.JWT_TOKEN_SECRET
    );
    const { password, ...otherDetails } = user._doc;
    res.cookie("access_token", access_token, {
      httpOnly: true,
    });
    res.status(200).json({
      user: otherDetails,
      access_token: access_token
    })
  } catch (err) {
    res.status(500).json(err);
  }
};


// account manager
export const loginForAccountManage = async (req, res) => {
 try {
  const user = await AccountManage.findOne({username: req.body.username})
  if (!user) {
    return res.status(401).json("wrong email or password");
  }
  const isPasswordValid = bcrypt.compareSync(
    req.body.password,
    user.password
  );
  if (!isPasswordValid) {
    return res.status(400).json("wrong username or password")
  }

  return res.status(200).json({
    message: "Login success",
    user: user
  })


 } catch (err) {
  res.status(500).json(err);
  
 }
}
