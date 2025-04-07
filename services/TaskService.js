const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// CREATE Task
module.exports.createTask = (taskData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const task = await prisma.task.create({
          data: {
            ...taskData,
            startDate: new Date(taskData.startDate),
            dueDate: new Date(taskData.dueDate),
        
          },
       
        });
  
        resolve({ message: 'Task created successfully', success: true, task });
      } catch (err) {
        console.error('Create task error:', err);
        reject({ message: 'Error creating task', success: false });
      }
    });
  };
  

// GET All Tasks
module.exports.getAllTasks = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const tasks = await prisma.task.findMany({
        orderBy: { createdAt: 'desc' },
      
      });
      resolve({ message: 'Fetched tasks successfully', success: true, tasks });
    } catch (err) {
      console.error('Get tasks error:', err);
      reject({ message: 'Error fetching tasks', success: false });
    }
  });
};

// GET Task by ID
module.exports.getTaskById = (taskId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const task = await prisma.task.findUnique({
        where: { id: taskId },
       
      });
      if (!task) return reject({ message: 'Task not found', success: false });
      resolve({ message: 'Task found', success: true, task });
    } catch (err) {
      console.error('Get task by ID error:', err);
      reject({ message: 'Error fetching task', success: false });
    }
  });
};

// UPDATE Task
module.exports.updateTask = (taskId, updatedData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const task = await prisma.task.update({
        where: { id: taskId },
        data: updatedData,
   
      });
      resolve({ message: 'Task updated successfully', success: true, task });
    } catch (err) {
      console.error('Update task error:', err);
      reject({ message: 'Error updating task', success: false });
    }
  });
};

module.exports.deleteTask = (taskId) => {
  return new Promise(async (resolve, reject) => {
    try {
     
      // Then delete the task
      await prisma.task.delete({
        where: { id: taskId },
      });

      resolve({ message: 'Task  deleted successfully', success: true });
    } catch (err) {
      console.error('Delete task error:', err);
      reject({ message: 'Error deleting task', success: false });
    }
  });
};
