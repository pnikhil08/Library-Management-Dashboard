const {createTodo, getAllTodo} = require("../controllers/todo.controller")

const express = require("express")

const router = express.Router()

router.post("/", createTodo);

router.get("/", getAllTodo)

module.exports = router