
const mongoose = require("mongoose");
const Task = require("../models/task.model");


exports.createTask = async (req, res) => {
  try {
    // Create a new task using data received from the client
    const task = await Task.create(req.body);

    // Return the newly created task
    return res.status(201).json(task);
  } catch (err) {
    console.error("Create Task Error:", err.message);

    return res.status(500).json({
      message: "Failed to create task",
      error: err.message,
    });
  }
};

/**
 * Get all tasks
 * GET /api/tasks
 */
exports.getAllTask = async (req, res) => {
  try {
    // Fetch all tasks from MongoDB
    const tasks = await Task.find();

    return res.status(200).json(tasks);
  } catch (err) {
    console.error("Get All Tasks Error:", err.message);

    return res.status(500).json({
      message: "Failed to fetch tasks",
      error: err.message,
    });
  }
};

/**
 * GET /api/tasks/:id
 */
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId before querying the database
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid Task ID",
      });
    }

    // Find task by ID
    const task = await Task.findById(id);

    // Task does not exist
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(200).json(task);
  } catch (err) {
    console.error("Get Task Error:", err.message);

    return res.status(500).json({
      message: "Failed to fetch task",
      error: err.message,
    });
  }
};

/**
 * PUT /api/tasks/:id
 */
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid Task ID",
      });
    }

    // Update only the fields provided in the request body
    const task = await Task.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,          
        runValidators: true // Run schema validation
      }
    );

    // Task does not exist
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(200).json(task);
  } catch (err) {
    console.error("Update Task Error:", err.message);

    return res.status(500).json({
      message: "Failed to update task",
      error: err.message,
    });
  }
};

/**
 * Delete a task by ID
 * DELETE /api/tasks/:id
 */
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid Task ID",
      });
    }

    // Find and delete the task
    const task = await Task.findByIdAndDelete(id);

    // Task does not exist
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (err) {
    console.error("Delete Task Error:", err.message);

    return res.status(500).json({
      message: "Failed to delete task",
      error: err.message,
    });
  }
};
