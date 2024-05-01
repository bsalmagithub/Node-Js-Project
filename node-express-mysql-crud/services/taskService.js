// services/taskService.js

const pool = require('../config/db');

module.exports = {
  getAllTasks: async () => {
    try {
      const [rows] = await pool.query('SELECT * FROM tasks');
      return rows;
    } catch (error) {
      throw new Error(`Error fetching tasks: ${error.message}`);
    }
  },

  // Other task service functions (e.g., createTask, updateTask, deleteTask)...
  async createTask(title, description, assigned_to, status) {
    const [result] = await pool.query(
      'INSERT INTO tasks (title, description, assigned_to, status) VALUES (?, ?, ?, ?)',
      [title, description, assigned_to, status]
    );
    const newTaskId = result.insertId;
    return { id: newTaskId, title, description, assigned_to, status };
  },

  async updateTask(taskId, updates) {
    const { title, description, assigned_to, status } = updates;
    await pool.query(
      'UPDATE tasks SET title=?, description=?, assigned_to=?, status=? WHERE id=?',
      [title, description, assigned_to, status, taskId]
    );
    return { id: taskId, title, description, assigned_to, status };
  },
};



  

