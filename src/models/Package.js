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
    price: {
        type: Number,
        required: true, // bắt buộc
    },
    id_opption: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ],
}, { timestamps: true })

module.exports = mongoose.model("Package", PackageSchema)