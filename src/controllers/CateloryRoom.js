import CateloryRoom from '../models/CateloryRoom'

export const getAllCateloryRoom = async (req, res, next) => {
    try {
        const CateloryRooms = await CateloryRoom.find()
        return res.status(200).json(CateloryRooms)
    } catch (err) {
        return res.status(500).json(err)
    }
}
export const getCateloryRoomById = async (req, res, next) => {
    try {
        const id = req.body._id
        const cateloryRoom = await CateloryRoom.findById(id);
        if (!cateloryRoom) {
            return res.status(404).json({ message: 'Category room not found' });
        }
        return res.status(200).json(cateloryRoom);
    } catch (err) {
        return res.status(500).json(err);
    }
};
export const addCateloryRoom = async (req, res, next) => {
    try {
        const newCateloryRoom = new CateloryRoom(req.body)
        const saveCateloryRoom = await newCateloryRoom.save()
        res.status(200).json(saveCateloryRoom)
    } catch (err) {
        res.status(404).json(err)
    }
}
export const updateCateloryRoom = async (req, res, next) => {
    try {
        const updatedCateloryRoom = await CateloryRoom.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedCateloryRoom) {
            return res.status(404).json({ message: 'Category room not found' });
        }

        return res.status(200).json(updatedCateloryRoom);
    } catch (err) {
        return res.status(500).json(err);
    }
};
// chua tao ham xoa 
export const deleteCateloryRoom = async (req, res, next) => {
    try {
        await CateloryRoom.findByIdAndDelete(req.params.id)
        return res.status(200).json('delete success')
    } catch (err) {
        return res.status(500).json(err)
    }
}