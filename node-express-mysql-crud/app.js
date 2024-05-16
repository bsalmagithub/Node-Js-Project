const express = require('express');
const bodyParser = require('body-parser');
const TaskService = require('./services/taskService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API!');
});

// GET all tasks
app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await TaskService.getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST a new task
app.post('/api/tasks', async (req, res) => {
    const newTask = req.body;
    try {
        const createdTask = await TaskService.createTask(newTask);
        res.json(createdTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT (update) an existing task
app.put('/api/tasks/:id', async (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    try {
        const result = await TaskService.updateTask(taskId, updatedTask);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE a task
app.delete('/api/tasks/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
        await TaskService.deleteTask(taskId);
        res.sendStatus(200); // Successful delete
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
