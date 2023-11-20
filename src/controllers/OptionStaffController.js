import optionStaff from '../models/OptionStaff'
import Package from '../models/Package'

export const getAllOptionStaff = async (req, res, next) => {
    try {
        const user = await optionStaff.find()
        return res.status(200).json({
            errcode: 0,
            user
        })
    } catch (err) {
        return res.status(404).json(err)
    }
}
export const addOptionStaff = async (req, res, next) => {
    try {
        const newOptionStaff = new optionStaff(req.body)
        const saveOptionStaff = await newOptionStaff.save()
        const updateOption = await Package.findByIdAndUpdate(newOptionStaff.packageID, {
            $addToSet: {
                id_OptionStaff: newOptionStaff._id
            }
        })
        if (!updateOption) {
            return res.status(404).json("update option in option not success")
        }
        res.status(200).json(saveOptionStaff)
    } catch (err) {
        res.status(404).json(err)
    }
}
export const editOptionStaff = async (req, res, next) => {
    try {
        const updateOptionStaff = await optionStaff.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateOptionStaff)
    } catch (err) {
        res.status(404).json(err)
    }
}