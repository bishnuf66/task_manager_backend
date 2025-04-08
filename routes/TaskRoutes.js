const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");
const { user } =require('../middleware/Authmiddleware') ;

router.post("/tasks", user, TaskController.createTask);  // Create task
router.put("/tasks/:id", user, TaskController.updateTask);  // Update task
router.get("/tasks", user, TaskController.getAllTasks);  // Get all tasks
router.delete("/tasks/:id", user, TaskController.deleteTask);  // Delete task

module.exports = router;
