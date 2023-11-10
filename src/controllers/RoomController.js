import Room from '../models/Room'
import OptionRoom from '../models/OptionRoom'
import Staff from '../models/Staff'
import floor from '../models/Foor'
export const getAllRoom = async (req, res, next) => {
    try {
        const rooms = await Room.find()
        return res.status(200).json({
            errcode: 0,
            rooms: rooms
        })
    } catch (err) {
        console.log(err)
    }
}
export const addRoom = async (req, res, next) => {
    try {
        const roomCount = await Room.countDocuments();
        const optionRoom = await OptionRoom.findById(req.body.optionRoomId);

        if (roomCount >= optionRoom.quantity_room) {
            return res.status(400).json('Bạn không thể tạo thêm phòng, đã đạt giới hạn');
        }

        const newRoom = new Room(req.body)
        const saveRoom = await newRoom.save()
        const updateStaff = await Staff.findByIdAndUpdate(newRoom.StaffId, {
            $addToSet: {
                id_room: newRoom._id
            }
        })
        const updateFloor = await floor.findByIdAndUpdate(newRoom.floor_id, {
            $addToSet: {
                id_room: newRoom._id
            }
        })
        if (!updateStaff || !updateFloor) {
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