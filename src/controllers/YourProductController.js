import YourProduct from '../models/YourProduct'
import AccountMangage from "../models/accountManagement"

export const getAllYourProduct = async (req, res, next) => {
    try {
        const YourProducts = await YourProduct.find()
        return res.status(200).json(YourProducts)
    } catch (err) {
        return res.status(500).json(err)
    }
}
export const getProductById = async (req, res, next) => {
    try {
        const id = req.body._id
        const productById = await YourProduct.findById(id)
        if (!productById) {
            return res.status(404).json({ message: 'Floor not found' });
        }
        return res.status(200).json(productById);
    } catch (err) {
        return res.status(404).json(err);
    }
};
// add Your product with AccountManager

export const addYourProduct = async (req, res, next) => {
    try {
        const newYourProduct = new YourProduct(req.body)
        const saveYourProduct = await newYourProduct.save()
        res.status(200).json(saveYourProduct)
    } catch (err) {
        res.status(404).json(err)
    }
}

export const updateYourProduct = async (req, res, next) => {
    try {
        const updatedYourProduct = await YourProduct.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedYourProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json(updatedYourProduct);
    } catch (err) {
        return res.status(500).json(err);
    }
};
// chua tao ham xoa 
export const deleteYourProduct = async (req, res, next) => {
    try {
        await YourProduct.findByIdAndDelete(req.params.id)
        return res.status(200).json('delete success')
    } catch (err) {
        return res.status(500).json(err)
    }
}