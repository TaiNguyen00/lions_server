import mongoose from "mongoose"

const RoomSchema = new mongoose.Schema({
    room_number: {
        type: Number,
        required: true, // bắt buộc

    },
    room_status: {
        type: String,
        required: true, // bắt buộc
    },
    optionRoomId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'optionRoom'
    }
    ,
    floor_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'floor'
        }
    ],
    StaffId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff'
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model("Room", RoomSchema)