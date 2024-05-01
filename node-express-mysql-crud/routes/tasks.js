// routes/tasks.js
const express = require('express');
const router = express.Router();
const TaskService = require('../services/taskService');

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Create a new task
router.post('/', async (req, res) => {
  const { title, description, assigned_to, status } = req.body;
  try {
    const newTask = await TaskService.createTask(title, description, assigned_to, status);
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update a task by ID
router.put('/:id', async (req, res) => {
  const taskId = req.params.id;
  const { title, description, assigned_to, status } = req.body;
  try {
    const updatedTask = await TaskService.updateTask(taskId, { title, description, assigned_to, status });
    res.json(updatedTask);
  } catch (error) {
    console.error(`Error updating task with ID ${taskId}:`, error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    await TaskService.deleteTask(taskId);
    res.json({ message: `Task with ID ${taskId} deleted successfully` });
  } catch (error) {
    console.error(`Error deleting task with ID ${taskId}:`, error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
