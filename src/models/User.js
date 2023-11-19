import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true, // bắt buộc

  },
  id_package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package'
  },
  accountManagementID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'accountManagement'
    }
  ],
  last_name: {
    type: String,
    required: true, // bắt buộc
  },
  middle_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  phone_number: {
    type: Number,

  },
  token_o2h: {
    type: String,
  },
  role: {
    type: Number,
    default: 0
  },
  bill: {
    type: String,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true })

module.exports = mongoose.model("User", UserSchema)