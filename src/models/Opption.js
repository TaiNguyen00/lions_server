import mongoose from "mongoose"

const OpptionSchema = new mongoose.Schema({
    disription: {
        type: String,
        required: true, // bắt buộc

    },
    title_opption: {
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

module.exports = mongoose.model("Opption", OpptionSchema)