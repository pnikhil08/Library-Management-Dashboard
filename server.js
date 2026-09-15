// Load environment variables from .env file
require("dotenv").config();

// Import Express
const express = require("express");

// Create Express application
const app = express();

// Import MongoDB connection function
const connectDB = require("./config/db");

// Import route files
const userRoutes = require("./router/user.routes");
const productRoutes = require("./router/product.routes");
const createTask = require("./router/task.routes");
const createTodo = require("./router/todo.routes");

// Import authentication/validation middleware
const userValidation = require("./middleware/auth.middileware");

// --------------------------------------------------
// Middleware
// --------------------------------------------------

// Parse incoming JSON request bodies
// Example: req.body will contain JSON data sent by the client
app.use(express.json());

// --------------------------------------------------
// Routes
// --------------------------------------------------

// Todo routes
// All todo APIs will start with /todo
app.use("/todo", createTodo);

// Authentication/validation middleware
// This middleware will run for all routes defined AFTER this line
app.use(userValidation);

// Task routes
// All task APIs will start with /tasks
app.use("/tasks", createTask);

// User routes
// All user APIs will start with /user
app.use("/user", userRoutes);

// Product routes
// All product APIs will start with /product
app.use("/product", productRoutes);

// --------------------------------------------------
// Start Server
// --------------------------------------------------

const serverStart = async () => {
  try {
    // Connect to MongoDB before starting the server
    await connectDB();

    // Start Express server on port 3000
    app.listen(3000, () => {
      console.log("Server Starting at 3000 Port");
    });
  } catch (err) {
    // Handle database connection or server startup errors
    console.error("Server failed to start:", err);
  }
};

// Execute server startup function
serverStart();
