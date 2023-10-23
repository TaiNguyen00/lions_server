import Package from '../models/Package'
export const getAllPackage = async (req, res, next) => {
    try {
        const user = await Package.find().populate("id_opption")
        return res.status(200).json({
            errcode: 0,
            user
        })
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