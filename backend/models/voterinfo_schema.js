import mongoose from 'mongoose'

const VoterSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    voterId: { type: String, unique: true, required: true },
    linkedIds: [
      {
        idType: { type: String, enum: ["SSN", "Driver's License"], required: true },
        status: { type: String, enum: ["Verified", "Pending"], default: "Pending" }
      }
    ],
    votingStatus: { type: String, enum: ["Eligible", "Not Eligible"], default: "Eligible" },
    electionHistory: [
      {
        electionYear: { type: Number, required: true },
        electionType: { type: String, required: true },
        participated: { type: Boolean, default: false }
      }
    ]
  });
  
  module.exports = mongoose.model("Voter", VoterSchema);
  