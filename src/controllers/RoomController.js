import Room from '../models/Room'
import OptionRoom from '../models/OptionRoom'
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
        const roomCount = await Room.countDocuments();
        const optionRoom = await OptionRoom.findById(req.body.optionRoomId);

        if (roomCount >= optionRoom.quantity) {
            return res.status(400).json(optionRoom.quantity);
        }

        const newRoom = new Room(req.body)
        const saveRoom = await newRoom.save()
        const updateOptionRoom = await OptionRoom.findByIdAndUpdate(newRoom.optionRoomId, {
            $addToSet: {
                roomId: newRoom._id
            }
        })

        if (!updateOptionRoom) {
            return res.status(404).json("update option in option not success")
        }
        return res.status(200).json(saveRoom)
    } catch (err) {
        return res.status(500).json(err)
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