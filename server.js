const express = require("express");
const inquirer = require("inquirer");

const table = require("console.table");
const mysql = require("mysql2");

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
            employee.id,
            employee.first_name,
            employee.last_name,
            role.title,
            department AS Department,
            roles.salary,
            employee.roles,
            