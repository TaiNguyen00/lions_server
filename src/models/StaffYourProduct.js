import mongoose from "mongoose"

const StaffYourProductSchema = new mongoose.Schema({
    id_room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'

    },
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'YourProduct'
    },
    manage_reservations: {
        type: String,
        required: true, // bắt buộc
    },
    revenue: {
        type: Number,
        required: true
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

module.exports = mongoose.model("StaffYourProduct", StaffYourProductSchema)