DROP SCHEMA IF EXISTS employeeTracker;
CREATE SCHEMA IF NOT EXISTS employeeTracker ;
USE employeeTracker ;


DROP TABLE IF EXISTS employeeTracker.department ;

CREATE TABLE IF NOT EXISTS employeeTracker.department (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL
  );


-- -----------------------------------------------------
-- Table employeeTracker.role
-- -----------------------------------------------------
DROP TABLE IF EXISTS employeeTracker.role ;

CREATE TABLE IF NOT EXISTS employeeTracker.role (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES employeeTracker.department (id)
    ON DELETE SET NULL
);


-- -----------------------------------------------------
-- Table employeeTracker.employee
-- -----------------------------------------------------
DROP TABLE IF EXISTS employeeTracker.employee ;

CREATE TABLE IF NOT EXISTS employeeTracker.employee (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  employer_id INT,
  FOREIGN KEY (employer_id)
    REFERENCES employeeTracker.employee (id)
    ON DELETE SET NULL,
  role_id INT ,
  FOREIGN KEY (role_id)
    REFERENCES employeeTracker.role (id)
    ON DELETE SET NULL
);
/*
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
/*

USE employeetracker;
DROP procedure IF EXISTS addDepartment;

DELIMITER $$;
CREATE DEFINER=root@localhost PROCEDURE addDepartment(in departmentName varchar(30))
BEGIN
	INSERT INTO department(department_name) VALUES (departmentName);
END


DROP procedure IF EXISTS addRole;

DELIMITER $$;
CREATE DEFINER=root@localhost PROCEDURE addRole(in new_title varchar(30),in new_salary decimal(10,0), in new_department_id INT)
BEGIN
	INSERT INTO role(title,salary,department_id)
VALUES (new_title, new_salary,new_department_id);
END$$

DELIMITER $$;

call addDepartment('Marketing');
call addDepartment('Management');
call addDepartment('Sales');

CALL addRole('project manager', 121000, 1);
CALL addRole('Analytics Specialist', 71000, 1);
CALL addRole('Writer', 51000, 1);


CALL addRole('Leader', 111000, 2);
CALL addRole('Representative', 71000, 2);
CALL addRole('Trainer', 91000, 2);
CALL addRole('Monitor', 51000, 2); */