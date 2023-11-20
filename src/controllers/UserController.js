import User from "../models/User"
import Package from "../models/Package"
import AccountManage from "../models/accountManagement"


export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (err) {
    console.log(err)
  }
}


export const editUser = async (req, res, next) => {
  try {
    const useId = req.params.id
    const data = req.body
    // const update = await findByIdAndUpdate(useId, data, { new: true })
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
    res.status(500).json(err)
  }
}

export const UpdateUserByPackage = async (req, res) => {
  const packageID = req.body._id
  try {
    const updateUserPackage = await User.findByIdAndUpdate(req.params.id, {$push: {id_package: packageID}}, {new: true})
    res.status(200).json({
      message: "update success",
      updateUserPackage: updateUserPackage
    })
  } catch (err) {
    res.status(500).json(err)
  }
}


// for manager account
export const createAccountManageForUser = async (req, res, next) => {
  const {userName} =  req.body
  try {
    // tìm thằng user muốn tạo thông qua username
    const existingUser = await User.findOne({ userName });
    
    if (existingUser) {
      // có thể tạo mới mk cách ngẫu nhiêu nếu muốn, truyền vào lenght của mk muốn có
      const randomPassword = generateRandomPassword(4)

      console.log(randomPassword)

      const newAccountForManage = await AccountManage.create({
        userID: existingUser._id,
        userName: userName,
        passWord: "123newpassword"
      })
      return res.status(200).json({
        message: "A new account for manager created",
        newAccountForManage: newAccountForManage
      })
    } else {
      return res.status(205).json("User not found")
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}


export const getAccountsManage = async (req, res, next )=> {
  try {
    const accountsManage = await AccountManage.find({}).populate("userID")

    return res.status(200).json({
      accountsManage
    })
  } catch (err) {
    return res.status(500).json(err)
  }
}



// generate random password for user  (close func)
const generateRandomPassword = (length) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
  }
  return password;
};