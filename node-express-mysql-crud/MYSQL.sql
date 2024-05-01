CREATE DATABASE task_management;
USE task_management;
-- Create the tasks table
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    assigned_to VARCHAR(100),
    status ENUM('To Do', 'In Progress', 'Done') DEFAULT 'To Do',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- Show table structure
DESCRIBE tasks;
SELECT user, host FROM mysql.user;
INSERT INTO tasks (title, description, assigned_to) VALUES ('Task 1', 'Description of Task 1','user');

INSERT INTO tasks (title, description, assigned_to) VALUES ('Task 2', 'Description of Task 2','user2');

INSERT INTO tasks (title, description, assigned_to) VALUES ('Task 3', 'Description of Task 3','user3');

INSERT INTO tasks (title, description, assigned_to) VALUES ('Task 4', 'Description of Task 4','user4');

INSERT INTO tasks (title, description, assigned_to) VALUES ('Task 5', 'Description of Task 5','user5');