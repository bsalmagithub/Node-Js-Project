# Node Js Project
sql access
 MYSQL @root/root

This API provides endpoints for managing tasks, including creating, updating, deleting, and retrieving tasks.

Installation
Clone this repository to your local machine.
Install Node.js if you haven't already.
Run npm install to install the required dependencies.
Usage
Starting the Server
To start the server, run:

bash
Copy code
npm start
By default, the server runs on port 3000. You can also specify a custom port using the PORT environment variable.

Endpoints
GET /api/tasks: Retrieves all tasks.
POST /api/tasks: Creates a new task.
PUT /api/tasks/:id: Updates an existing task by ID.
DELETE /api/tasks/:id: Deletes a task by ID.
Example Usage
Retrieve all tasks:

http
Copy code
GET /api/tasks
Create a new task:

http
Copy code
POST /api/tasks
Content-Type: application/json

{
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending"
}
Update an existing task:

http
Copy code
PUT /api/tasks/11
Content-Type: application/json

{
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "status": "completed"
}
Delete a task:

http
Copy code
DELETE /api/tasks/11
Error Handling
If an error occurs during any operation, the server responds with a 500 status code and an error message in JSON format.
