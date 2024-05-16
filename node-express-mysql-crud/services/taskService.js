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
  async createTask(name, img, assigned_to) {
    const [result] = await pool.query(
      'INSERT INTO tasks (name, img, assigned_to) VALUES (?, ?, ?)',
      [name, img, assigned_to ]
    );
    const newTaskId = result.insertId;
    return { id: newTaskId, name, img, assigned_to  };
  },

  async updateTask(taskId, updates) {
    const { name, img, assigned_to} = updates;
    await pool.query(
      'UPDATE tasks SET name=?, img=?, assigned_to=?, WHERE id=?',
      [name, img, assigned_to,taskId]
    );
    return { id: taskId, name, img, assigned_to };
  },

  async deleteTask(taskId) {
    const [result] = await pool.query('DELETE FROM tasks WHERE id=?', [taskId]);
    if (result.affectedRows > 0) {
      return true;
    } else {
      throw new Error(`Task with ID ${taskId} not found`);
    }
  }
};



  

