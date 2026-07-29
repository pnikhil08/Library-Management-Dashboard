const Todo = require("../models/todo.model")

exports.createTodo = async(re , res) =>{
    try{const todo = await Todo.create(re.body);
    res.status(201).json(todo);
}catch(err){
    res.status(500).json({
        massage : err.massage
    })
}
}


exports.getAllTodo = async(re, res) => {
    try{
        const allTodo = await Todo.find();
        res.status(200).json(allTodo)
    }catch(err){
        res.status(500).json({
            massage : err.massage
        })
    }
}