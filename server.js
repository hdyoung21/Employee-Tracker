const express = require("express");
const inquirer = require("inquirer");

const table = require("console.table");
const mysql = require("mysql2");
const { Employees } = require("./models");
const { response } = require("express");
require("dotenv").config();


const db = mysql.createConnection(
    {
        host: 'locslhost',
        user: 'root',
        password: process.env.password,
        database: 'employee_db'

    }
)

const menu = () => {
    inquirer.prompt([{
        type: "list",
        name: "choice",
        message: "Please make a selection",
        choices: ['View Employees',
            "View Roles",
            "View Depeartments",
            "Add Employee",
        ]
    }])

        .then((answer) => {
            const { choice } = answer;
            if (choice === 'View Employees') {
                seeEmployees();
            }
            else if (choice === "View Roles") {
                seeRoles();
            }
            else if (choice === "View Departments") {
                seeDepartments();
            }
            else if (choice === "Add Employee") {
                addEmployee();
            };
        });

    seeEmployees = () => {
        const sql = `SELECT 
            employees.id,
            employees.first_name,
            employees.last_name,
            roles.role_title,
            department AS department,
            roles.salary,
            CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employees
            LEFT JOIN role ON employees.roles_id = roles.id
            LEFT JOIN employees ON role.department_id = department.id
    `; db.query(sql, (err, res) => {
        if (err) {return err;}
        else {console.table{"\n", res};
    }
        menu()
    });
    

    
