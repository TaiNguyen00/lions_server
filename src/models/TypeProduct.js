import mongoose from "mongoose"

const TypeProductSchema = new mongoose.Schema({
    id_product: {
        type: Number,
        required: true, // bắt buộc
    },
    name_type: {
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

module.exports = mongoose.model("TypeProduct", TypeProductSchema)