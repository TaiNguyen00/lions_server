import Package from '../models/Package'
import AccountManage from "../models/accountManagement"
export const getAllPackage = async (req, res, next) => {
    try {
        const packageAll = await Package.find()
        return res.status(200).json(packageAll)
    } catch (err) {
        return res.status(404).json(err)
    }
}
export const getPackageById = async (req, res, next) => {
    try {
        const packageById = await Package.findById(req.params.id)

        if (!packageById) {
            return res.status(404).json({ message: 'Package not found' });
        }

        return res.status(200).json(packageById);
    } catch (err) {
        return res.status(404).json(err);
    }
};
export const addPackage = async (req, res, next) => {
    try {
        const newPackage = new Package(req.body)
        const savePackage = await newPackage.save()
        res.status(200).json(savePackage)
    } catch (err) {
        res.status(404).json(err)
    }
}

//
export const editPackage = async (req, res, next) => {
    try {
        const updatePackage = await Package.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatePackage)
    } catch (err) {
        res.status(404).json(err)
    }
}


// người dùng mới thì register.
// đăng kí tài khoản. Login, dùng thử thì chưa có tài khoản quản lý. Khi mà đăng kí khách sạn thì sẽ sinh ra một cái account có thông tin gói đang dùng
// 2 trường hợp chưa có account quản lý và đã có account quản lí. Khi chưa có account quản lý, thì phải đăng kí khách sạn, sinh ra account quản lý
// cần thêm một api tài khoản quản lý. Nếu đã có rồi, thì k cần đăng kí nữa


// cần thêm một bảng account control product
// cần một api đăng nhập trang quản lí này. api đấy sẽ lấy giữ liệu từ account đã đk sản phẩm của nó. Chứa id của thằng đk, thông tin. 



// api route check is first or second time

