import Room from '../models/Room'
import Package from '../models/Package'
import floor from '../models/Floor'
import CateloryRoom from '../models/CateloryRoom'
export const getAllRoom = async (req, res, next) => {
    try {
        const rooms = await Room.find().populate('catelory_room  client_id');
        return res.status(200).json(rooms)
    } catch (err) {
        console.log(err)
    }
}

export const getRoomById = async (req, res, next) => {
    try {
        const id = req.body.id_yourProduct
        const roomById = await Room.find({ id_yourProduct: id })
        if (!roomById) {
            return res.status(404).json({ message: 'Floor not found' });
        }
        return res.status(200).json(roomById);
    } catch (err) {
        return res.status(404).json(err);
    }
};


export const getRoomFloor = async (req, res, next) => {
    try {
        const id = req.body.floor_id
        const roomById = await Room.find({ floor_id: id })
        if (!roomById) {
            return res.status(404).json({ message: 'Floor not found' });
        }
        return res.status(200).json(roomById);
    } catch (err) {
        return res.status(404).json(err);
    }
};


export const addRoom = async (req, res, next) => {
    try {
        const id = req.body.id_yourProduct
        const roomCount = await Room.countDocuments({ id_yourProduct: id });
        const packages = await Package.findById(req.body.packageID);
        if (roomCount >= packages.quantity_room) {
            return res.status(400).json({ message: 'Bạn không thể tạo thêm phòng, đã đạt giới hạn' });
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

export const editRoomStatus = async (req, res, next) => {
    try {

        const idRoom = req.body._id

        const updateRoom = await Room.findByIdAndUpdate(idRoom, { $set: req.body }, { new: true })
        // xoa du liệu phòng trong tầng cũ

        res.status(200).json(updateRoom)
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const editRoom = async (req, res, next) => {
    try {
        const id = req.body._id
        // tầng cũ và tầng mới
        const newFloorId = req.body.floor_id;
        const oldFloorRoom = req.body.old_floor_id
        // end
        // loại cũ và loại mới 
        const newCateloryId = req.body.catelory_room;
        const oldCateloryId = req.body.old_catelory_id
        // end 
        const updateRoom = await Room.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        // xoa du liệu phòng trong tầng 
        const updateFloorOld = await floor.findByIdAndUpdate(
            oldFloorRoom,
            {
                $pull: {
                    id_room: updateRoom._id,
                },
            }
        );
        // end 
        // xóa phòng khỏi loại cũ 
        const updateCateloryOld = await CateloryRoom.findByIdAndUpdate(
            oldCateloryId,
            {
                $pull: {
                    id_room: updateRoom._id,
                },
            }
        );
        // end 
        // thêm phòng vào tầng mới 
        if (updateFloorOld && updateCateloryOld) {
            await floor.findByIdAndUpdate(
                newFloorId,
                {
                    $addToSet: {
                        id_room: updateRoom._id,
                    },
                }
            );
            await CateloryRoom.findByIdAndUpdate(
                newCateloryId,
                {
                    $addToSet: {
                        id_room: updateRoom._id,
                    },
                }
            );
            return res.status(200).json({
                message: "Update succes new floor"
            })
        }
        res.status(200).json(updateRoom)
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteRoom = async (req, res, next) => {
    try {
        const id = req.body._id
        const deletedRoom = await Room.findByIdAndDelete(id);

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