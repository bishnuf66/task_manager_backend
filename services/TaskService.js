const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// CREATE Task
module.exports.createTask = (taskData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const task = await prisma.task.create({
                data: {
                    title: taskData.title,
                    description: taskData.description,
                    startDate: new Date(taskData.startDate),
                    dueDate: new Date(taskData.dueDate),
                    priority: taskData.priority,
                    user: {
                        connect: {
                            email: taskData.userEmail, 
                        }
                    }
                }
            });
            resolve({ message: 'Task created successfully', success: true, task });
        } catch (err) {
            console.error('Error during task creation:', err);
            reject({ message: 'Error creating task', success: false });
        }
    });
};


// GET All Tasks
module.exports.getAllTasks = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            const tasks = await prisma.task.findMany({
                where: {
                    user: {
                        email: userEmail, 
                    },
                },
                orderBy: {
                    createdAt: "desc",
                },
            });
            resolve({ message: 'Fetched tasks successfully', success: true, tasks });
        } catch (err) {
            console.error('Get tasks error:', err);
            reject({ message: 'Error fetching tasks', success: false });
        }
    });
};


// UPDATE Task
module.exports.updateTask = (taskId, updatedData, userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            const task = await prisma.task.update({
                where: { id: taskId },
                data: {
                    ...updatedData,
                    userEmail: userEmail, 
                },
            });
            resolve({ message: 'Task updated successfully', success: true, task });
        } catch (err) {
            console.error('Update task error:', err);
            reject({ message: 'Error updating task', success: false });
        }
    });
};

// DELETE Task
module.exports.deleteTask = (taskId, userEmail) => {
    return new Promise(async (resolve, reject) => {

        try {
          
            const task = await prisma.task.findUnique({
                where: { id: taskId },
            });
            if (!task) {
                return reject({ message: 'Task not found', success: false });
            }
            await prisma.task.delete({
                where: { id: taskId },
            });

            resolve({ message: 'Task deleted successfully', success: true });
        } catch (err) {
            console.error('Delete task error:', err);
            reject({ message: 'Error deleting task', success: false });
        }
    });
};

