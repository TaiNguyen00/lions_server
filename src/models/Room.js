import mongoose from "mongoose"

const RoomSchema = new mongoose.Schema({
    roomcode: {
        type: Number,
        required: true, // bắt buộc

    },
    condition: {
        type: String,
        required: true, // bắt buộc
    },
    packageID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package'
    }
    ,
    floor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'floor'
    },

    catelory_room:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CateloryRoom'
    }
    ,
    client_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Client'
        }
    ],
    name: {
        type: String,
        // required: true, // bắt buộc
    },
    dateCheckin: {
        type: Date,
        // required: true
    },
    dateCheckout: {
        type: Date,
        // required: true
    },
    phone: {
        type: Number,
        min: 8,
        // required: true
    },
    cccd: {
        type: Number,
        min: 8,
        // require: true
    },
    nationality: {
        type: String,
        // require: true
    },
    sex: {
        type: String,
        // require: true
    },
    dateRange: {
        type: Date,
        // require: true
    },
    dateExpiration: {
        type: Date,
        // require: true
    }

}, { timestamps: true })

module.exports = mongoose.model("Room", RoomSchema)