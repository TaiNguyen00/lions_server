import Option from "../models/Option";
import Package from "../models/Package";


export const getAllOption = async (req, res, next) => {
  try {
    const options = await Option.find().populate("packageId");
    return res.status(200).json(options);
  } catch (err) {
    res.status(404).json(err);
  }
};
export const addOption = async (req, res, next) => {
  try {
    const newOption = new Option(req.body);
    const saveOption = await newOption.save();
    const updatePackage = await Package.findByIdAndUpdate(newOption.packageId, {
      $addToSet: {
        id_option: newOption._id,
      },
    });
    if (!updatePackage) {
      return res.status(404).json("update package in option not success");
    }
    res.status(200).json(saveOption);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const editOption = async (req, res, next) => {
  try {
    const updateOption = await Option.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateOption);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const deleteOption = async (req, res, next) => {
  try {
    await Option.findByIdAndDelete(req.params.id);
    res.status(200).json("delete success");
  } catch (err) {
    res.status(500).json(err);
  }
};


