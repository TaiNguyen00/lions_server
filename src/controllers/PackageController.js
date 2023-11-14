import Package from '../models/Package'
import User from "../models/User"
export const getAllPackage = async (req, res, next) => {
    try {
        const packageAll = await Package.find().populate({
            path: 'id_option',
            populate: [
                { path: 'id_optionRoom' },
                { path: 'id_optionStaff' },
                { path: 'option_additional' },
            ],

        })
        return res.status(200).json(packageAll)
    } catch (err) {
        return res.status(404).json(err)
    }
}
export const addPackage = async (req, res, next) => {
    try {
        const newPackage = new Package(req.body)
        const savePackage = await newPackage.save()
        res.status(200).json(savePackage)
    } catch (err) {
        res.status(404).json(err)
    }
}
export const editPackage = async (req, res, next) => {
    try {
        const updatePackage = await Package.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatePackage)
    } catch (err) {
        res.status(404).json(err)
    }
}



