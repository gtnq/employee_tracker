INSERT INTO employeetracker.department (department_name)
VALUES
('Marketing'),
('Management'),
('Sales');


INSERT INTO employeetracker.role
(title,
salary,
department_id)
VALUES
('project manager', 121000, 1),
('Analytics Specialist', 71000, 1),
('Writer', 51000, 1),
('Leader', 111000, 2),
('Representative', 71000, 2),
('Trainer', 91000, 2),
('Monitor', 51000, 2),
('Sales Manager',170000,3),
('Account Executive', 140000, 3),
('Sales Development', 70000, 3),
('Specialist/Consultant', 57000, 3),
('Customer Success', 61000, 3);

INSERT INTO employeetracker.employee
(first_name,
last_name,
role_id)
VALUES
("Henry", "Bruce", 8),
("Nataniel", "Graves", 4),
("Zaina", "Fulton", 1);

INSERT INTO employeetracker.employee
(first_name,
last_name,
employer_id,
role_id)
VALUES
("Hamzah", "Richards", 1, 12),
("Lyndon", "O'Ryan", 1, 12),
("Tegan", "Moses", 1, 9),
("Kamal", "Bryant", 1, 10),
("Max", "Mcclain", 1, 11),
("Hallie", "George", 1, 11),
("Cara", "Atkins", 2, 7),
("Linda", "Russo", 2, 7),
("Edgar", "Drake", 2, 6),
("Marc", "Small", 2, 5),
("Rachel", "Clements", 2, 6),
("Dalton", "Davis", 3, 2),
("Howard", "Potts", 3, 3),
("Andrew", "Maldonado",3, 3),
("Natalia", "Ryan", 3, 3);