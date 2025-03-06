import mongoose from "mongoose";

export const connectDB = async (req,res) => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error in MongoDB connection:", error);
        process.exit(1); // Exit process with failure
    }
};
