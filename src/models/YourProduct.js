import mongoose from "mongoose"

const YourProductSchema = new mongoose.Schema({
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    id_room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    name_product: {
        type: String,
        required: true, // bắt buộc
    },
    id_type_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeProduct'
    },
    type_product: {
        type: String,
        required: true, // bắt buộc
    },
    creact_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true })

module.exports = mongoose.model("YourProduct", YourProductSchema)