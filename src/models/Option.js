import mongoose from "mongoose"

const OpptionSchema = new mongoose.Schema({

    option_additional: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "optionAdditional"
        }
    ],
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