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
    label_room: {
        type: String,
        require: true
    },
    packageID: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Package'
        }
    ],

})
module.exports = mongoose.model('optionRoom', OptionRoomSchema)