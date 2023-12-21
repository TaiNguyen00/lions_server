import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  yourProduct: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "YourProduct",
  },
  codeProduct: {
    type: String,
    required: true,
  },
  package:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package'
  },
  username: {
    type: String,
    required: true, // bắt buộc
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },
  role_staff: {
    type: String,
    default: "reception"

  },
  codeID_staff: {
    type: String,
    required: true,
  },
},
  { timestamps: true }
);

module.exports = mongoose.model("Staff", StaffSchema);
