import mongoose from "mongoose"
// gom id_option room, id_optionstaff vào bảng package
const PackageSchema = new mongoose.Schema({
    code_package: {
        type: Number,
        required: true, // bắt buộc

    },
    name_package: {
        type: String,
        required: true, // bắt buộc
    },
    old_price: {
        type: Number,
        // required: true, // bắt buộc
    },
    price: {
        type: Number,
        required: true, // bắt buộc
    },
    id_optionAdditional: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'optionAdditional'

        }
    ], id_OptionStaff: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'optionStaff'

        }
    ],
    id_OptionRoom: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'optionRoom'

        }
    ],


}, { timestamps: true })

// middleware to populate lv2


module.exports = mongoose.model("Package", PackageSchema)