import mongoose from 'mongoose'

const electionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Upcoming", "Ongoing", "Completed"],
    default: "Upcoming",
  },
  candidates: [
    {
      name: {
        type: String,
        required: true,
      },
      party: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Party",
      },
      votes: {
        type: Number,
        default: 0,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Election", electionSchema);
