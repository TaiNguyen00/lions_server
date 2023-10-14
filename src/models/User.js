import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // bắt buộc
    unique: true // đảm bảo nó là email duy nhất...
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)