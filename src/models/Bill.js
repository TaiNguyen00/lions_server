import mongoose from "mongoose"

const BillSchema = new mongoose.Schema({
    id_package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package'
    },
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

}, { timestamps: true })

module.exports = mongoose.model("Bill", BillSchema)