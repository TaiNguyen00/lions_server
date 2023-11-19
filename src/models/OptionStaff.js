import mongoose from "mongoose";

const OptionStaffSchema = new mongoose.Schema({
    quantity_staff: {
        type: Number,
        require: true
    },
    title_staff: {
        type: String,
        require: true
    },
    label_staff: {
        type: String,
        require: true
    },
    packageID: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Package'
        }
    ],

})
module.exports = mongoose.model('optionStaff', OptionStaffSchema)