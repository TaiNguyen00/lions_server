import mongoose from "mongoose"

const ClientSchema = new mongoose.Schema({
    id_room: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    }],
    name: {
        type: String,
        required: true, // bắt buộc
    },
    dateCheckin: {
        type: Date,
        required: true
    },
    dateCheckout: {
        type: Date,
        required: true
    },
    phone: {
        type: Number,
        min: 8,
        required: true
    },
    cccd: {
        type: Number,
        min: 8,
        require: true
    },
    nationality: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    dateRange: {
        type: Date,
        require: true
    },
    dateExpiration: {
        type: Date,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Client", ClientSchema)