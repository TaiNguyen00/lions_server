import User from "../models/User"
import Package from "../models/Package"

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