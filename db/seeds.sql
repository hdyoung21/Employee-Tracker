INSERT INTO department(department_name)
VALUES ("Engineering"),
("Finance"),
("Sales"),
("Legal");

INSERT INTO roles (role_title, salary, department_id)
VALUES ("CRM Manager", 75000, 3),
       ("Sales Associate", 65000, 3),
       ("Head Engineer", 120000, 1),
       ("Lawyer", 150000, 4),
       ("Accountant", 80000, 2),
       ("Legal Department Head", 250000, 4),
       ("Handyman", 52000, 1),
       ("Tax Specialist", 75000, 2);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Hunter", "Young", 1, NULL),
       ("Joseph", "Anderson", 2, 1),
       ("Troy", "Morgan", 3, NULL),
       ("Connor", "Murphy", 4, 6),
       ("Diego", "Mora", 5, NULL),
       ("Chrissna", "Khiev", 6, NULL),
       ("David", "Hall", 7, 3),
       ("Charlee", "Gordon", 8, NULL);

