import mongoose from "mongoose"

const OpptionSchema = new mongoose.Schema({
    disription: {
        type: String,
        required: true, // bắt buộc

    },
    title_opption: {
        type: String,
        required: true, // bắt buộc
    }
}, { timestamps: true })

module.exports = mongoose.model("Option", OpptionSchema)