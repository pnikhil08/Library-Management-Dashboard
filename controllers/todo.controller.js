// Import Todo model
const Todo = require("../models/todo.model");

exports.createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
       
        res.status(201).json(todo);
    } catch (err) {
        
        res.status(500).json({
            message: err.message
        });
    }
};
exports.getAllTodo = async (req, res) => {
    try {
        const allTodo = await Todo.find();
        
        res.status(200).json(allTodo);
    } catch (err) {
        
        res.status(500).json({
            message: err.message
        });
    }
};
