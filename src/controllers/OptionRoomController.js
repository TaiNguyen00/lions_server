import optionRoom from '../models/OptionRoom'
import Package from '../models/Package'
export const getAllOptionRoom = async (req, res, next) => {
    try {
        const user = await optionRoom.find()
        return res.status(200).json({
            errcode: 0,
            user
        })
    } catch (err) {
        return res.status(404).json(err)
    }
}
export const addOptionRoom = async (req, res, next) => {
    try {
        const newOptionRoom = new optionRoom(req.body)
        const saveOptionRoom = await newOptionRoom.save()
        const updateOption = await Package.findByIdAndUpdate(newOptionRoom.packageID, {
            $addToSet: {
                id_OptionRoom: newOptionRoom._id
            }
        })
        if (!updateOption) {
            return res.status(404).json("update option in option not success")
        }
        res.status(200).json(saveOptionRoom)
    } catch (err) {
        res.status(404).json(err)
    }
}
export const editOptionRoom = async (req, res, next) => {
    try {
        const updateOptionRoom = await optionRoom.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateOptionRoom)
    } catch (err) {
        res.status(404).json(err)
    }
}