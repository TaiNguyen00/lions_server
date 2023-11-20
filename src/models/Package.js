import mongoose from "mongoose"

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

module.exports = mongoose.model("Package", PackageSchema)