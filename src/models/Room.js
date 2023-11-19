import mongoose from "mongoose"

const RoomSchema = new mongoose.Schema({
    roomcode: {
        type: Number,
        required: true, // bắt buộc

    },
    condition: {
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
    catelory_room: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CateloryRoom'
        }
    ],
    client_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Client'
        }
    ],
}, { timestamps: true })

module.exports = mongoose.model("Room", RoomSchema)