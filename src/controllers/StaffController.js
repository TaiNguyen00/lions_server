import Staff from '../models/Staff'
import optionStaff from '../models/OptionStaff'
import YourProduct from '../models/YourProduct'
export const getAllStaff = async (req, res, next) => {
    try {
        const staffs = await Staff.find()
        return res.status(200).json({
            errcode: 0,
            staffs: staffs
        })
    } catch (err) {
        console.log(err)
    }
}
export const addStaff = async (req, res, next) => {
    try {
        const staffCount = await Staff.countDocuments();
        const optionStaffs = await optionStaff.findById(req.body.id_optionStaff);
        console.log(optionStaffs.quantity_staff);
        if (staffCount >= optionStaffs.quantity_staff) {
            return res.status(400).json("Ban khong the tao them nhan vien");
        }

        const newStaff = new Staff(req.body)
        const saveStaff = await newStaff.save()
        const updateYourProduct = await YourProduct.findByIdAndUpdate(newStaff.id_product, {
            $addToSet: {
                id_staff: newStaff._id
            }
        })

        if (!updateYourProduct) {
            return res.status(404).json("update option in option not success")
        }
        return res.status(200).json(saveStaff)
    } catch (err) {
        return res.status(500).json(err)
    }
}
export const editStaff = async (req, res, next) => {
    try {
        const updateStaff = await Staff.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateStaff)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const deleteStaff = async (req, res, next) => {
    try {
        await Staff.findByIdAndDelete(req.params.id)
        res.status(200).json('delete success')
    } catch (err) {
        res.status(500).json(err)
    }

}