INSERT INTO department (name)
VALUES  ("Accounting"),
        ("Human Resources"),
        ("Research and Development"),
        ("Information Technology");

INSERT INTO role (department_id, title, salary)
VALUES  (1, "Auditor", 80000),
        (1, "Lead Accountant", 100000),
        (2, "Generalist", 60000),
        (2, "Recruiter", 55000),
        (3, "Engineer", 220000),
        (3, "Chemist", 235000),
        (4, "Developer", 80000),
        (4, "Technician", 45000);

INSERT INTO employee (role_id, first_name, last_name, manager)
VALUES (1, "John", "Smith", "Jenny Klein"),
(2, "Jenny", "Klein"),
()