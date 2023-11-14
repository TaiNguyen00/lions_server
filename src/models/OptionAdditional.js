import mongoose from "mongoose";

const OptionAdditionalSchema = new mongoose.Schema({
    quantity_additional: {
        type: Number,
        require: true
    },
    title_additional: {
        type: String,
        require: true
    },
    label_additional: {
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
module.exports = mongoose.model('optionAdditional', OptionAdditionalSchema)