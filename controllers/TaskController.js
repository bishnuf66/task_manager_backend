const { validateCreateTask, validateUpdateTask } = require("../middleware/validators/TaskValidator");
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require("../services/TaskService");

module.exports.createTask = async (req, res) => {
    try {
        await validateCreateTask(req.body);

        const taskData = { ...req.body, userEmail: req.email }; 

        const result = await createTask(taskData);
        if (result) {
            return res.status(201).json(result);
        }
    } catch (err) {
        console.error("Error during task creation:", err);
        return res.status(400).json({
            message: err.message || "Validation or task creation failed",
            success: false
        });
    }
};

module.exports.updateTask = async (req, res) => {
    try {
        await validateUpdateTask(req.body);

        const taskData = { ...req.body, userEmail: req.email };

        const result = await updateTask(req.params.id, taskData);
        if (result) {
            return res.status(200).json(result);
        }
    } catch (err) {
        console.error("Error during task update:", err);
        return res.status(400).json({
            message: err.message || "Validation or task update failed",
            success: false
        });
    }
};

module.exports.getAllTasks = async (req, res) => {
    try {
        const result = await getAllTasks(req.email); 
        return res.status(200).json(result);
    } catch (err) {
        console.error("Error fetching tasks:", err);
        return res.status(400).json({
            message: err.message || "Error fetching tasks",
            success: false
        });
    }
};


module.exports.deleteTask = async (req, res) => {
    try {
        const result = await deleteTask(req.params.id, req.email); 
        if (result) {
            return res.status(200).json(result);
        }
    } catch (err) {
        console.error("Error deleting task:", err);
        return res.status(400).json({
            message: err.message || "Task deletion failed",
            success: false
        });
    }
};
