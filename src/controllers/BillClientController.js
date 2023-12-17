import BillClient from '../models/BillClient'

export const getAllBillClient = async (req, res, next) => {
    try {
        const BillClients = await BillClient.find()
        return res.status(200).json(BillClients)
    } catch (err) {
        return res.status(500).json(err)
    }
}
export const getBillClientById = async (req, res, next) => {
    try {
        const id = req.body.id_yourProduct
        const BillClients = await BillClient.find({ id_yourProduct: id }).populate("id_yourProduct");
        if (!BillClients) {
            return res.status(404).json({ message: 'Bill not found' });
        }
        return res.status(200).json(BillClients);
    } catch (err) {
        return res.status(500).json(err);
    }
};
export const addBillClients = async (req, res, next) => {
    try {
        const newBillClients = new BillClient(req.body)
        const saveBillClients = await newBillClients.save()
        res.status(200).json(saveBillClients)
    } catch (err) {
        res.status(404).json(err)
    }
}
