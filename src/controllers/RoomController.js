import Room from '../models/Room'
export const getAllRoom = async (req, res, next) => {
    try {
        const users = await Room.find()
        return res.status(200).json({
            errcode: 0,
            users: users
        })
    } catch (err) {
        console.log(err)
    }
}
export const addRoom = async (req, res, next) => {
    try {
        const newRoom = new Room(req.body)
        const saveRoom = await newRoom.save()
        res.status(200).json(saveRoom)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const editRoom = async (req, res, next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateRoom)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const deleteRoom = async (req, res, next) => {
    try {
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json('delete success')
    } catch (err) {
        res.status(500).json(err)
    }

}