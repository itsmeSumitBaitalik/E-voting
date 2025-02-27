import mongoose from 'mongoose'

const AccountManagementSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    accountStatus: { type: String, enum: ["Active", "Deactivated", "Deleted"], default: "Active" },
    deactivatedAt: { type: Date, default: null },
    deletedAt: { type: Date, default: null }
  });

module.exports = mongoose.model("AccountManagement", AccountManagementSchema);