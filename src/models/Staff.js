import mongoose from "mongoose"

const StaffSchema = new mongoose.Schema({
    id_room: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'

    }],
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'YourProduct'
    },
    id_optionStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'optionStaff'
    },
    manage_reservations: {
        type: String,
        required: true, // bắt buộc
    },
    revenue: {
        type: Number,
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model("Staff", StaffSchema)