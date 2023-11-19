import mongoose from "mongoose"

const YourProductSchema = new mongoose.Schema({
    id_user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'

        }
    ],
    id_floor: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'floor'
        }
    ],
    id_staff: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'StaffYourProduct'
        }
    ],
    name_product: {
        type: String,
        required: true, // bắt buộc
    },
    id_type_product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TypeProduct'
        }
    ],
    accountManagementID: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'accountManagement'
        }
    ],
}, { timestamps: true })

module.exports = mongoose.model("YourProduct", YourProductSchema)