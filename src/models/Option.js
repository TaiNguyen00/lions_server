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
    packageId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Package"
        }
    ],
    id_optionRoom: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'optionRoom'
        }
    ],
    id_optionStaff: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'optionStaff'
        }
    ]

}, { timestamps: true })

module.exports = mongoose.model("Option", OpptionSchema)