const Joi = require('joi');

// Task creation validator
const taskSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().optional(),
  status: Joi.string().valid('PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELED').default('PENDING'),
  priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH', 'URGENT').default('MEDIUM'),
  startDate: Joi.date().optional(),
  dueDate: Joi.date().optional(),
  isCompleted: Joi.boolean().default(false),
  
});

module.exports.validateCreateTask = (data) => taskSchema.validateAsync(data);

// Task update validator
const updateTaskSchema = Joi.object({
  title: Joi.string().min(3).optional(),
  description: Joi.string().optional(),
  status: Joi.string().valid('PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELED').optional(),
  priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH', 'URGENT').optional(),
  startDate: Joi.date().optional(),
  dueDate: Joi.date().optional(),
  isCompleted: Joi.boolean().optional(),
});

module.exports.validateUpdateTask = (data) => updateTaskSchema.validateAsync(data);




