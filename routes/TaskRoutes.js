const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");

router.post("/tasks", TaskController.createTask);  // Create task
router.put("/tasks/:id", TaskController.updateTask);  // Update task
router.get("/tasks", TaskController.getAllTasks);  // Get all tasks
router.get("/tasks/:id", TaskController.getTaskById);  // Get task by ID
router.delete("/tasks/:id", TaskController.deleteTask);  // Delete task

module.exports = router;
