import mongoose from 'mongoose'

const partySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slogan: {
    type: String,
    required: true,
  },
  policies: {
    type: [String],
    required: true,
  },
  leadership: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Party", partySchema);
