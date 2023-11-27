import mongoose from "mongoose"

const StaffSchema = new mongoose.Schema({
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'YourProduct'
    },
    packageID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package'
    },
    user_name: {
        type: String,
        required: true, // bắt buộc
    },
    password: {
        type: Number,
        required: true
    },
    codeID_staff: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("Staff", StaffSchema)