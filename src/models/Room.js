import mongoose from "mongoose"

const RoomSchema = new mongoose.Schema({
    room_number: {
        type: Number,
        required: true, // bắt buộc

    },
    room_stutus: {
        type: String,
        required: true, // bắt buộc
    }
}, { timestamps: true })

module.exports = mongoose.model("Room", RoomSchema)