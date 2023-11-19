import Room from '../models/Room'
import OptionRoom from '../models/OptionRoom'
import floor from '../models/Foor'
import CateloryRoom from '../models/CateloryRoom'
export const getAllRoom = async (req, res, next) => {
    try {
        const rooms = await Room.find().populate("floor_id").populate('catelory_room');
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

        const updateFloor = await floor.findByIdAndUpdate(newRoom.floor_id, {
            $addToSet: {
                id_room: newRoom._id
            }
        })
        const updateCatelory = await CateloryRoom.findByIdAndUpdate(newRoom.catelory_room, {
            $addToSet: {
                id_room: newRoom._id
            }
        })
        if (!updateFloor, !updateCatelory) {
            return res.status(404).json("update fllor in floor not success")
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
        const deletedRoom = await Room.findByIdAndDelete(req.params.id);

        if (!deletedRoom) {
            return res.status(404).json({ message: 'Room not found' });
        }

        // Remove the room reference from the corresponding floor
        const updateFloor = await floor.findByIdAndUpdate(
            deletedRoom.floor_id,
            {
                $pull: {
                    id_room: deletedRoom._id,
                },
            }
        );

        if (!updateFloor) {
            return res.status(404).json('Update floor for deleted room not successful');
        }

        return res.status(200).json({ message: 'Delete success' });
    } catch (err) {
        return res.status(500).json(err);
    }
};