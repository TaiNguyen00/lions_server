import mongoose from "mongoose";

const FoorSchema = new mongoose.Schema({
    id_yourProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'YourProduct'
    },
    id_room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    title_foor: {
        type: String,
        require: true
    },
    floor: {
        type: Number,
        require: true
    },
    title_second: {
        type: String,
    }
})
module.exports = mongoose.model('floor', FoorSchema)