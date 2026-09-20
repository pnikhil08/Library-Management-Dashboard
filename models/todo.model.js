const mongoose = require("mongoose");

// Define the schema for Todo documents
const todoSchema = new mongoose.Schema({
    // Title of the todo
    title: String,

    // Current status of the todo
    status: String
});

// Create a Todo model using the todoSchema
const Todo = mongoose.model("Todo", todoSchema);

// Export the Todo model so it can be used in other files
module.exports = Todo;
