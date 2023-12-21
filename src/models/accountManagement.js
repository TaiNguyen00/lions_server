import mongoose from "mongoose";

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
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },

  phone: {
    type: Number,
  },
  role: {
    type: String,

  },
  password: {
    type: String,
    required: true,
  }
},
  { timestamps: true }
);

module.exports = mongoose.model("accountManagement", accountManagementSchema);
