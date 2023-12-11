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
    const id = req.body._id
    const update = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    return res.status(200).json(update)
  } catch (err) {
    return res.status(500).json(err)
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

  const { packageID, idUser } = req.body
  console.log(idUser);
  const _id = idUser
  try {
    const getUser = await User.findByIdAndUpdate(_id, { id_package: packageID }, { new: true },)
    // const getUser = await User.findById(_id).populate("id_package")
    res.status(200).json({
      message: "update success",
      user: getUser
    })
  } catch (err) {
    res.status(500).json(err)
  }
}
// for manager account
export const createAccountManageForUser = async (req, res, next) => {
  const { username, yourProductID } = req.body
  try {
    // tìm thằng user muốn tạo thông qua username
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      // có thể tạo mới mk cách ngẫu nhiêu nếu muốn, truyền vào lenght của mk muốn có
      const randomPassword = generateRandomPassword(6)

      console.log(randomPassword)
      // package
      const newAccountForManage = await AccountManage.create({
        userID: existingUser._id,
        yourProduct: yourProductID,
        username: username,
        package: existingUser.id_package,
        password: randomPassword,
      })
      await User.findByIdAndUpdate(existingUser._id, { $addToSet: { account_manage: newAccountForManage._id } });
      const getID = await User.findById(existingUser._id).populate("id_package account_manage")
      return res.status(200).json({
        message: "A new account for manager created",
        newAccountForManage: getID
      })
    } else {
      return res.status(205).json("User not found")

    }

  } catch (err) {
    console.log(err);
    return res.status(500).json(err)
  }
}

export const getAccountsManage = async (req, res, next) => {
  try {
    const accountsManage = await AccountManage.find({}).populate("userID")
    return res.status(200).json({
      accountsManage: accountsManage
    })
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const getAccountById = async (req, res, next) => {
  try {
    const id = req.body._id
    const accountManege = await AccountManage.findById(id).populate("yourProduct")
    if (!accountManege) {
      return res.status(404).json({ message: 'Account  not found' });
    }
    return res.status(200).json(accountManege);
  } catch (err) {
    return res.status(500).json(err);
  }
};


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


// check is first LOGIN to manage pagges

export const checkIsFirstLoginToManagePage = async (req, res, next) => {
  try {
    const findUser = await User.findById(req.body._id)
    if (!findUser.account_manage) {
      res.redirect('http://127.0.0.1:5173/register-product')
    } else {
      res.redirect('http://127.0.0.1:5173/dashboard')
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}
