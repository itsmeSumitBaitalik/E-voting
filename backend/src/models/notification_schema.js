import mongoose from 'mongoose'

const NotificationPreferencesSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId,
             ref: "User",
             required: true },
    emailNotifications: { type: Boolean,
                         default: true },
    smsAlerts: { type: Boolean,
                default: false },
    preferredLanguage: { type: String,
                         enum: ["en", "es", "fr"],
                         default: "en" }
  });
  
export const NotificationPreferences = mongoose.model("NotificationPreferences", NotificationPreferencesSchema);
  