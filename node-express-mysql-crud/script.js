document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    // Function to fetch tasks from the server and render them
    const fetchTasks = async () => {
        try {
            const response = await fetch('/api/tasks');
            const tasks = await response.json();
            renderTasks(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error.message);
        }
    };

    // Function to render tasks on the web page
    const renderTasks = (tasks) => {
        taskList.innerHTML = ''; // Clear previous tasks
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Assigned To: ${task.assigned_to}</p>
                <p>Status: ${task.status}</p>
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(taskElement);
        });
    };

    // Function to handle form submission (adding a new task)
    taskForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = {
            title: document.getElementById('titleInput').value,
            description: document.getElementById('descriptionInput').value,
            assigned_to: document.getElementById('assignedToInput').value,
            status: document.getElementById('statusSelect').value
        };

        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Fetch and render updated task list after adding a new task
                await fetchTasks();
                taskForm.reset(); // Clear form inputs after submission
            }
        } catch (error) {
            console.error('Error adding task:', error.message);
        }
    });

    // Function to delete a task by ID
    const deleteTask = async (taskId) => {
        try {
            const response = await fetch(`/api/tasks/${taskId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                // Fetch and render updated task list after deleting a task
                await fetchTasks();
            }
        } catch (error) {
            console.error('Error deleting task:', error.message);
        }
    };

    // Initial fetch of tasks when the page loads
    fetchTasks();
});
