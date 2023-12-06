import mongoose from "mongoose"

const ClientSchema = new mongoose.Schema({
    room_code: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true, // bắt buộc
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
        // require: true
    },
    dateExpiration: {
        type: Date,
        // require: true
    },
    id_yourProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'YourProduct'
    },
}, { timestamps: true })

module.exports = mongoose.model("Client", ClientSchema)