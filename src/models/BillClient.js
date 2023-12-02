import mongoose from "mongoose"

const BillClientSchema = new mongoose.Schema({

    room_code: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    checkInDateTime: {
        type: Date,
        required: true
    },
    checkOutDateTime: {
        type: Date,
        required: true
    },
    intendPrice: {
        type: Number,
        required: true
    },
    intendTime: {
        type: Number,
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model("BillClient", BillClientSchema)