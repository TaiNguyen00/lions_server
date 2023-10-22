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
    optionId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ],

})
module.exports = mongoose.model('optionStaff', OptionStaffSchema)