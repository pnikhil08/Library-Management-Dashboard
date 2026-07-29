const { creatTask, getAllTask, getTaskById, updateTask, deleteTask} = require("../controllers/task.controllr")

const express = require("express")
const router = express.Router();

router.post("/", creatTask)

router.get("/", getAllTask)

router.get("/:id", getTaskById)

router.put("/:id", updateTask)

router.delete("/:id", deleteTask)



module.exports = router