const mongoose = require("mongoose")
//Task Scheema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        default: "",
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
// Task model
const Task = mongoose.model("Task", taskSchema)

module.exports = Task
