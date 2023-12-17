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
  last_name: {
    type: String,
    required: true, // bắt buộc
  },
  username: {
    type: String,
    required: true,
    unique: true 
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

  phone_number: {
    type: Number,

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
  account_manage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'accountManagement'
  }
}, { timestamps: true })

module.exports = mongoose.model("User", UserSchema)