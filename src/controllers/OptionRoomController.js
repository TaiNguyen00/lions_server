import optionRoom from '../models/OptionRoom'
import Option from '../models/Option'
export const getAllOptionRoom = async (req, res, next) => {
    try {
        const user = await optionRoom.find().populate("optionId")
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
        const updateOption = await Option.findByIdAndUpdate(newOptionRoom.optionId, {
            $addToSet: {
                id_optionRoom: newOptionRoom._id
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