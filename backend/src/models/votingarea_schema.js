import mongoose from 'mongoose'

const voteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true, // Ensures a user can vote only once
  },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{
  timestamps:true
});

export const Vote = mongoose.model("Vote", voteSchema);
