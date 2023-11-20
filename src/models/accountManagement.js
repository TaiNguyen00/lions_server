import mongoose from "mongoose";

const accountManagementSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    yourProductID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "YourProduct",
    },
    userName: {
      type: String,
      require: true,
    },
    passWord: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("accountManagement", accountManagementSchema);
