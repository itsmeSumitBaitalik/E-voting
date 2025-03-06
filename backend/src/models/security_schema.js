import mongoose from 'mongoose'

const PasswordManagementSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  passwordHash: { type: String, required: true },
  twoFactorEnabled: { type: Boolean, default: false },
  biometricEnabled: { type: Boolean, default: false },
  securityQuestions: [
    {
      question: { type: String, required: true },
      answerHash: { type: String, required: true }
    }
  ]
});

export const PasswordManagement= mongoose.model("PasswordManagement", PasswordManagementSchema);
