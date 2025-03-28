import mongoose from 'mongoose'

const partySchema = new mongoose.Schema({
  img:{
    type:String,
    required:true
  },
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
  }
},{
  timestamps:true
});

export const Party = mongoose.model("Party", partySchema);
