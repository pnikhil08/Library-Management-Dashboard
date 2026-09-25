const mongoose = require("mongoose");

// Define the schema for User documents
const userSchema = new mongoose.Schema(
    {
        // User's full name
        name: {
            type: String,
            required: true,
            trim: true
        },
        // User's email address
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        // User's password
        password: {
            type: String,
            required: true
        },

        // User's role in the application
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        // URL/path of the user's profile image
        profileImage: {
            type: String,
            default: ""
        }
    },
    {
        // Automatically adds createdAt and updatedAt fields
        timestamps: true
    }
);
// Create the User model using the userSchema
const User = mongoose.model("User", userSchema);
// Export the User model for use in other files
module.exports = User;
