import Staff from '../models/Staff'
import Package from '../models/Package'
import YourProduct from '../models/YourProduct'


export const getAllStaff = async (req, res, next) => {
    try {
        const staffs = await Staff.find()
        return res.status(200).json(staffs)
    } catch (err) {
        console.log(err)
    }
}
export const addStaff = async (req, res, next) => {
    try {
        const staffCount = await Staff.countDocuments();
        const packages = await Package.findById(req.body.packageID);
        console.log(packages.quantity_staff);
        if (staffCount >= packages.quantity_staff) {
            return res.status(400).json("Ban khong the tao them nhan vien");
        }

        const newStaff = new Staff(req.body)
        const saveStaff = await newStaff.save()
        const updateYourProduct = await YourProduct.findByIdAndUpdate(req.body.yourProductID, {
            $push: {
                id_staff: newStaff._id
            }
        })

        if (!updateYourProduct) {
            return res.status(404).json("update statff is not success")
        }
        return res.status(200).json(saveStaff)
    } catch (err) {
        return res.status(500).json(err)
    }
}
export const editStaff = async (req, res, next) => {
    try {
        const id = req.body._id
        const updateStaff = await Staff.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json(updateStaff)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const deleteStaff = async (req, res, next) => {
    try {
        await Staff.findByIdAndDelete(req.body.staffId)
        res.status(200).json('delete success')
        try {
            await YourProduct.findByIdAndUpdate(req.body.yourProductID, {
                $pull: { id_staff: req.body.staffID }
            })
            res.status(200).json('delete success update yourProduct')
        } catch (err) {
            res.status(400).json(err)
        }
    } catch (err) {
        res.status(500).json(err)
    }

}