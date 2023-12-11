import Client from '../models/Client'
import Room from '../models/Room'

export const getAllClient = async (req, res, next) => {
    try {
        const Clients = await Client.find()
        return res.status(200).json(Clients)
    } catch (err) {
        return res.status(500).json(err)
    }
}

export const getClientById = async (req, res, next) => {
    try {
        const id = req.body.id_yourProduct
        const Clients = await Client.find({ id_yourProduct: id });

        if (!Clients) {
            return res.status(404).json({ message: 'Category room not found' });
        }

        return res.status(200).json(Clients);
    } catch (err) {
        return res.status(500).json(err);
    }
};

export const addClient = async (req, res, next) => {
    try {
        const newClient = new Client(req.body); // Use Client instead of Room
        const saveClient = await newClient.save();
        return res.status(200).json(saveClient);
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