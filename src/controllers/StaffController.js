import Staff from '../models/Staff'
import Package from '../models/Package'
import YourProduct from '../models/YourProduct'


export const getAllStaff = async (req, res, next) => {
    try {
        const id = req.body.yourProductID
        const staffs = await Staff.find({ yourProductID: id })
        return res.status(200).json(staffs)
    } catch (err) {
        console.log(err)
    }
}
export const addStaff = async (req, res, next) => {
    try {
        const staffCount = await Staff.countDocuments();
        const packages = await Package.findById(req.body.packageID);
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
        return res.status(200).json({
            saveStaff: saveStaff,
        })
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
        const id = req.body._id
        const deleteStaff = await Staff.findByIdAndDelete(id)
        if (!deleteStaff) {
            return res.status(404).json({ message: 'Staff not found' });
        }


        const updateStaff = await YourProduct.findByIdAndUpdate(
            deleteStaff.yourProductID,
            {
                $pull: {
                    id_floor: deleteStaff._id,
                },
            }
        );
        if (!updateStaff) {
            return res.status(404).json('Update floor for deleted room not successful');
        }
        return res.status(200).json({ message: 'Delete success' });
    } catch (err) {
        res.status(500).json(err)
    }

}