import mongoose from "mongoose"

const accountManagementSchema = new mongoose.Schema({
    userID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package'
    },
    yourProduct:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'YourProduct'
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model("accountManagement", accountManagementSchema)
