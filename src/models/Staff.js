import mongoose from "mongoose"

const StaffSchema = new mongoose.Schema({
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'YourProduct'
    },
    username: {
        type: String,
        required: true, // bắt buộc
        unique: true
    },
    password: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    },
    role_staff: {
        type: String,
        required: true
    },
    codeID_staff: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true })

module.exports = mongoose.model("Staff", StaffSchema)