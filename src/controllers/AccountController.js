import accountManagement from '../models/accountManagement'

// export const getAllClient = async (req, res, next) => {
//     try {
//         const Clients = await Client.find()
//         return res.status(200).json(Clients)
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// }

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

export const addAccount = async (req, res, next) => {
    try {
        const newAccount = new accountManagement(req.body); // Use Account instead of Room
        const saveAccount = await newAccount.save();
        return res.status(200).json(saveAccount);
    } catch (err) {
        return res.status(500).json(err);
    }
};

export const updateClient = async (req, res, next) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedClient) {
            return res.status(404).json({ message: 'Category room not found' });
        }

        return res.status(200).json(updatedClient);
    } catch (err) {
        return res.status(500).json(err);
    }
};
// chua tao ham xoa 
export const deleteClient = async (req, res, next) => {
    try {
        await Client.findByIdAndDelete(req.params.id)
        return res.status(200).json('delete success')
    } catch (err) {
        return res.status(500).json(err)
    }
}