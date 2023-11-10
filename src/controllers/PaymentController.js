import Bill from "../models/Bill";
import User from "../models/User";
export const getPayment = async (req, res) => {
  try {
    const getBills = await Bill.find().populate("id_package id_user");
    if (!getBills) {
      return res.status(401).json("Can't get buy from server");
    }
    return res.status(200).json(getBills);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const createBill = async (req, res) => {
  try {
    const payment = new Bill(req.body);
    const savePayment = await payment.save();

    return res.status(200).json(savePayment);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const acceptBill = async (req, res) => {
  try {
    const { isActive, id_user, id_package } = req.body;
    const activePayment = await Bill.findByIdAndUpdate(
      req.params.id,
      { $set: { isActive: isActive } },
      { new: true }
    );
    
    if (activePayment.isActive === true) {
      await User.findByIdAndUpdate({_id: id_user}, {$set: {id_package: id_package}}, {new: true})
    }
    return res.status(200).json({
      activePayment: activePayment
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};
