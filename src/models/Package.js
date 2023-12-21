import mongoose from "mongoose"
// gom id_option room, id_optionstaff vào bảng package
const PackageSchema = new mongoose.Schema({
    code_package: {
        type: String,
        required: true, // bắt buộc

    },
    name_package: {
        type: String,
        required: true, // bắt buộc
    },

    price: {
        type: Number,
        required: true, // bắt buộc
    },
    title_room: {
        type: String,
        required: true, // bắt buộc
    },
    quantity_room: {
        type: Number,
        required: true
    },
    title_staff: {
        type: String,
        required: true, // bắt buộc
    },
    quantity_staff: {
        type: Number,
        required: true
    },
}, { timestamps: true })

// middleware to populate lv2


module.exports = mongoose.model("Package", PackageSchema)