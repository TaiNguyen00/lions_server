import optionAdditional from '../models/OptionAdditional'
import Option from '../models/Option'
export const getAllOptionAdditional = async (req, res, next) => {
    try {
        const optionAdd = await optionAdditional.find().populate("optionId")
        return res.status(200).json({
            errcode: 0,
            optionAdd
        })
    } catch (err) {
        return res.status(404).json(err)
    }
}
export const addOptionAdditional = async (req, res, next) => {
    try {
        const newOptionAdditional = new optionAdditional(req.body)
        const saveOptionAdditonal = await newOptionAdditional.save()
        const updateOption = await Option.findByIdAndUpdate(newOptionAdditional.optionId, {
            $addToSet: {
                option_additional: newOptionAdditional._id
            }
        })
        if (!updateOption) {
            return res.status(404).json("update option in option not success")
        }
        res.status(200).json(saveOptionAdditonal)
    } catch (err) {
        res.status(404).json(err)
    }
}
export const editOptionAdditinal = async (req, res, next) => {
    try {
        const updateOptionAdditional = await optionAdditional.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateOptionAdditional)
    } catch (err) {
        res.status(404).json(err)
    }
}