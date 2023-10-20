import mongoose from "mongoose";

const OptionRoomSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        require: true
    },
    title_room: {
        type: String,
        require: true
    },
    optionId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ],
    roomId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
        }
    ]
})
module.exports = mongoose.model('optionRoom', OptionRoomSchema)