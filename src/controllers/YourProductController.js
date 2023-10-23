import YourProduct from '../models/YourProduct'

export const getAllYourProduct = async (req, res, next) => {
    try {
        const YourProducts = await YourProduct.find()
        return res.status(200).json(YourProducts)
    } catch (err) {
        return res.status(500).json(err)
    }
}
export const addYourProduct = async (req, res, next) => {
    try {
        const newYourProduct = new YourProduct(req.body)
        const saveYourProduct = await newYourProduct.save()
        res.status(200).json(saveYourProduct)
    } catch (err) {
        res.status(404).json(err)
    }
}
// chua tao ham xoa 
export const deleteYourProduct = async (req, res, next) => {
    try {
        await YourProduct.findByIdAndDelete(req.params.id)
        return res.status(200).json('delete success')
    } catch (err) {
        return res.status(500).json(err)
    }
}