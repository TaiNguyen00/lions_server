import mongoose from "mongoose"

const YourProductSchema = new mongoose.Schema({
    id_floor: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'floor'
        }
    ],

    name_product: {
        type: String,
        required: true, // bắt buộc
    },
    phone_product:
    {
        type: String,
        required: true, // bắt buộc
    },
    adress_product:
    {
        type: String,
        required: true, // bắt buộc
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package'
    },
    codeProduct: {
        type: String,
        required: true,
    },
    accountManagementID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accountManagement'
    }
}, { timestamps: true })

module.exports = mongoose.model("YourProduct", YourProductSchema)