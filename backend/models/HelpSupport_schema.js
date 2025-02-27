import mongoose from 'mongoose'

const HelpSupportSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    issueType: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["Pending", "Resolved"], default: "Pending" },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model("HelpSupport", HelpSupportSchema);
  