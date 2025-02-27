import mongoose from 'mongoose'

const PersonalInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true }
  },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  governmentIds: [
    {
      idType: { type: String, enum: ["Aadhar", "PAN", "Passport"], required: true },
      idNumber: { type: String, required: true, unique: true },
      status: { type: String, enum: ["Verified", "Pending"], default: "Pending" }
    }
  ]
});

module.exports = mongoose.model("PersonalInfo", PersonalInfoSchema);
