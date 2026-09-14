
const mongoose = require("mongoose");

/**
 * Connects the application to MongoDB.
 * The MongoDB connection URL is loaded from environment variables.
 */
const connectDB = async () => {
  try {
    // Connect to MongoDB using the URL from .env
    await mongoose.connect(process.env.MONGODB_URL);

    // Confirm successful database connection
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    // Log the connection error
    console.error("❌ MongoDB Connection Failed:", error.message);

    // Stop the application if the database connection fails
    process.exit(1);
  }
};

module.exports = connectDB;
