// Import Todo model
const Todo = require("../models/todo.model");


// Create a new Todo
// Receives Todo data from the request body and saves it to the database
exports.createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);

        // Send the newly created Todo with 201 Created status
        res.status(201).json(todo);
    } catch (err) {
        // Handle server/database errors
        res.status(500).json({
            message: err.message
        });
    }
};


// Get all Todos
// Fetches all Todo documents from the database
exports.getAllTodo = async (req, res) => {
    try {
        const allTodo = await Todo.find();

        // Send all Todos with 200 OK status
        res.status(200).json(allTodo);
    } catch (err) {
        // Handle server/database errors
        res.status(500).json({
            message: err.message
        });
    }
};
