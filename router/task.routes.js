
const express = require("express");

const {
    creatTask,
    getAllTask,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controllers/task.controllr");

const router = express.Router();

router
    .post("/", creatTask)
    .get("/", getAllTask)
    .get("/:id", getTaskById)
    .put("/:id", updateTask)
    .delete("/:id", deleteTask);

module.exports = router;
