import mongoose from "mongoose";

const OptionRoomSchema = new mongoose.Schema({
    quantity_room: {
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

})
module.exports = mongoose.model('optionRoom', OptionRoomSchema)