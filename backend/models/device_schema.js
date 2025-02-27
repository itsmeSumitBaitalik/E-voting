import mongoose from 'mongoose'

const DeviceSessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId,
              ref: "User",
             required: true },
    
    activeSessions: [
      {
        device: { type: String, required: true },
        location: { type: String, required: true },
        lastActive: { type: Date, default: Date.now }
      }
    ],
    loginHistory: [
      {
        device: { type: String, required: true },
        location: { type: String, required: true },
        loginTime: { type: Date, default: Date.now }
      }
    ]
  });
  
  module.exports = mongoose.model("DeviceSession", DeviceSessionSchema);
  