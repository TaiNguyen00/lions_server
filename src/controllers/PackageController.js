import Package from '../models/Package'
import User from "../models/User"
export const getAllPackage = async (req, res, next) => {
    try {
        const packageAll = await Package.find().populate('id_option')
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


// export const getPackageByUser = async (req, res) => {
//     try {
//         const getPackage = await Package.fin
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// }

