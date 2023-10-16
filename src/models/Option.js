import mongoose from "mongoose"

const OptionSchema = new mongoose.Schema({
    disription: {
        type: String,
        required: true, // bắt buộc

    },
    title_option: {
        type: String,
        required: true, // bắt buộc
    },

}, { timestamps: true })

module.exports = mongoose.model("Option", OptionSchema)