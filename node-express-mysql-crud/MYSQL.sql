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
INSERT INTO task_management.tasks (name, img, summary) VALUES ("Harry Potter and the Order of the Phoenix", "https://bit.ly/2IcnSwz","Harry Potter and Dumbledore's warning about the return of
Lord Voldemort is not heeded by the wizard authorities who, in turn, look to
undermine Dumbledore's authority at Hogwarts and discredit Harry.");
INSERT INTO task_management.tasks (name, img, summary) VALUES ("The Lord of the Rings: The Fellowship of the Ring", "https://bit.ly/2tC1Lcg","A young hobbit, Frodo, who has found the One Ring that
belongs to the Dark Lord Sauron, begins his journey with eight companions to
Mount Doom, the only place where it can be destroyed.");
INSERT INTO task_management.tasks (name, img, summary) VALUES ("Avengers: Endgame", "https://bit.ly/2Pzczlb","Adrift in space with no food or water, Tony Stark sends a
message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the
remaining Avengers -- Thor, Black Widow, Captain America, and Bruce Banner --
must figure out a way to bring back their vanquished allies for an epic showdown
with Thanos -- the evil demigod who decimated the planet and the universe.");



SELECT * FROM task_management.tasks;
DELETE from task_management.tasks where id = 1;
ALTER TABLE task_management.tasks
rename COLUMN  assigned_to To summary;

alter table task_management.tasks modify summary varchar (10000);