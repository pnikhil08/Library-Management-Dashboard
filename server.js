require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./config/db");
const userRoutes = require("./router/user.routes");
const productRoutes = require("./router/product.routes");

const userValidation = require("./middleware/auth.middileware");

const createTask = require("./router/task.routes")

const createTodo = require("./router/todo.routes")

// connectDB()
app.use(express.json());

app.use("/todo", createTodo);
app.use(userValidation);

app.use("/tasks", createTask)
app.use("/user", userRoutes);
app.use("/product", productRoutes);

const serverStart = async () => {
  try {
    await connectDB();

    app.listen(3000, () => {
      console.log("Server Starting at 3000 Port");
    });
  } catch (err) {
    console.error(err);
  }
};

serverStart()
