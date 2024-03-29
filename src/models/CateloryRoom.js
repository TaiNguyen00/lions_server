import mongoose from "mongoose"

const CateloryRoomSchema = new mongoose.Schema({
    id_room: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'

    }],
    id_yourProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'YourProduct'
    },
    cateloryRoom: {
        type: String,
        required: true, // bắt buộc
    },
    priceDay: {
        type: Number,
        required: true
    },
    priceHour: {
        type: Number,
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model("CateloryRoom", CateloryRoomSchema)