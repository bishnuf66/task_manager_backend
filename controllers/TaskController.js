const { validateCreateTask, validateUpdateTask } = require("../middleware/validators/TaskValidator");
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require("../services/TaskService");

module.exports.createTask = async (req, res) => {
    try {
        // Validate task creation data
        await validateCreateTask(req.body);
        const result = await createTask(req.body);
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
        // Validate task update data
        await validateUpdateTask(req.body);
        const result = await updateTask(req.params.id, req.body);
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
        const result = await getAllTasks();
        return res.status(200).json(result);
    } catch (err) {
        console.error("Error fetching tasks:", err);
        return res.status(400).json({
            message: err.message || "Error fetching tasks",
            success: false
        });
    }
};

module.exports.getTaskById = async (req, res) => {
    try {
        const result = await getTaskById(req.params.id);
        if (result) {
            return res.status(200).json(result);
        }
    } catch (err) {
        console.error("Error fetching task:", err);
        return res.status(400).json({
            message: err.message || "Task not found",
            success: false
        });
    }
};

module.exports.deleteTask = async (req, res) => {
    try {
        const result = await deleteTask(req.params.id);
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
