const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const { printTable } = require('console-table-printer');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db',
        multipleStatements: true
    },
    console.log(`Connected to the employee_db database.`)
);

// Inquirer prompt of all possible options
const menu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: "What would you like to do?",
                choices: ['View all Deparments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
            }])
        .then((answers) => {
            switch (answers.menu) {
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'View all Roles':
                    viewRoles();
                    break;
                case 'View all Employees':
                    viewEmployees();
                    break;
                case 'Add a Department':
                    addDepartment();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
                case 'Update an Employee Role':
                    updatedRole();
            }
        })
}
//view all departments
const viewDepartments = () => {
    //show table of department names and department ids
    db.query('SELECT * FROM department', function (err, results) {
        printTable(results);
        menu();
})}
// view all roles
const viewRoles = () => {
    //show job title role id deparment and salary
    db.query('SELECT * FROM role', function (err, results) {
        printTable(results);
        menu();
})
}
// view all employees
const viewEmployees = () => {
    //show table of employee data, employee id, first last name,job title, department, salary, manager
    db.query('SELECT * FROM employee', function (err, results) {
        printTable(results);
        menu();
})
}
// add a department
const addDepartment = () => {
    //enter the name and create a new deparment in the database
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: "What is the name of the New Department?",
        }])
    .then((answers) => {}
    )};
// add a role
const addRole = () => {
    //prompted to enter name, salary, department for the role and the role is added to the database
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'newRole',
            message: "What is the new Role?",
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the Salary for this role?'
        },
        {
            type: 'input',
            name: 'department',
            message: 'What Department does this Role belong to?',
        },
    ])
    .then((answers) => {}
    )};
// add an employee
const addEmployee = () => {
    //prompted for first name, last name, role, manager and that employee is added to the database
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'newEmployee',
            message: "What is the employees first name?",
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the employees last name?',
        },
        {
            type: 'input',
            name: 'role',
            message: 'What Role does this employee have?',
        },
    {
        type: 'input',
        name: 'manager',
        message: 'Who is this employees manager?',
    }])
    .then((answers) => {}
    )};
// update an employee role
const updatedRole = () => {
        //prompted to select an employee to update and their new role and this info is updated in the database 
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'newRole',
                message: "What is their new Role?",
            },
          ])
        .then((answers) => {}
    )};

//Call menu function when app is ran 
menu();