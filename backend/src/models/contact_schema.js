import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subject: {
    type: String,
    required: true,
    enum: ["technical", "voting", "registration", "other"],
  },
  message: {
    type: String,
    required: true,
  },
},
{
  timestamps:true
}
);

export const Contact = mongoose.model("Contact", contactSchema);
