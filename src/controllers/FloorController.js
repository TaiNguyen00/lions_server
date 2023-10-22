import floor from '../models/Foor'
import YourProduct from '../models/YourProduct'
export const getAllFloor = async (req, res, next) => {
    try {
        const floors = await floor.find()
        return res.status(200).json(floors)
    } catch (err) {
        return res.status(404).json(err)
    }
}
export const addFloor = async (req, res, next) => {
    try {
        const newFloor = new floor(req.body)
        const saveFloor = await newFloor.save()
        const updateYourProduct = await YourProduct.findByIdAndUpdate(newFloor.id_yourProduct, {
            $addToSet: {
                id_floor: newFloor._id
            }
        })
        if (!updateYourProduct) {
            return res.status(404).json('update Floor in YourProduct npt success')
        }
        return res.status(200).json(saveFloor)
    } catch (err) {
        return res.status(404).json(err)
    }
}
export const deleteFloor = async (req, res, next) => {
    try {
        await floor.findByIdAndDelete(req.params.id)
        return res.status(200).json('delete success')
    } catch (err) {
        return res.status(404).json(err)
    }
}