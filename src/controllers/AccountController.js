import accountManagement from '../models/accountManagement'
import Package from '../models/Package'



export const getAccountById = async (req, res, next) => {
    try {
        const id = req.body.yourProduct
        const role = req.body.role
        const Accounts = await accountManagement.find({ yourProduct: id, role: role });
        if (!Accounts) {
            return res.status(404).json({ message: 'Account not found' });
        }
        return res.status(200).json(Accounts);
    } catch (err) {
        return res.status(500).json(err);
    }
};


export const getAccountYourProductById = async (req, res, next) => {
    try {
        const id = req.body.yourProduct
        const Accounts = await accountManagement.find({ yourProduct: id });
        if (!Accounts) {
            return res.status(404).json({ message: 'Account not found' });
        }
        return res.status(200).json(Accounts);
    } catch (err) {
        return res.status(500).json(err);
    }
};

export const addAccount = async (req, res, next) => {
    try {
        const productId = req.body.yourProduct;
        const role = "reception"
        const accountCount = await accountManagement.countDocuments({ yourProduct: productId, role: role });
        const packages = await Package.findById(req.body.package);
        if (accountCount >= packages.quantity_staff) {
            return res.status(400).json({ massage: "Bạn không thể tạo thêm nhân viên" });
        }
        const newAccount = new accountManagement(req.body); // Use Account instead of Room
        const saveAccount = await newAccount.save();
        return res.status(200).json(saveAccount);
    } catch (err) {
        return res.status(500).json(err);
    }
};

export const editAccount = async (req, res, next) => {
    try {
        const id = req.body._id
        const updateStaff = await accountManagement.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json(updateStaff)
    } catch (err) {
        res.status(500).json(err)
    }
}
// chua tao ham xoa 
export const deleteAccount = async (req, res, next) => {
    try {
        const id = req.body._id
        await accountManagement.findByIdAndDelete(id)
        return res.status(200).json('delete success')
    } catch (err) {
        return res.status(500).json(err)
    }
}