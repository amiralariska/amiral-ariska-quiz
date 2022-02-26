#!/usr/bin/env node
var chalk = require('chalk');
var gradient = require('gradient-string');
var inquirer = require('inquirer');
const chalkcolor = require('chalk-color-style-quiz');

var welcome = gradient('blue', 'cyan')('Welcome to Amiral Ariska Quiz');
console.log(welcome);

var password = 'CodeAmiral';
var form = inquirer.prompt([
    {
        name: 'full name',
        message: 'what is your full name:',
        type: 'input'
    },
    {
        name: 'date of birth',
        message: 'what is your date of birth:',
        type: 'date',
        format: { day: "numeric", month: "long", year: "numeric", hour: undefined, minute: undefined },
    },
    {
        name: 'city',
        message: 'what is your city:',
        type: 'input'
    },
    {
        name: 'gender',
        message: 'what is your gender:',
        type: 'list',
        choices: [
            'Male',
            'Female',
        ]
    },
    {
        name: 'password',
        message: 'please enter password to continue:',
        type: 'input',
        default() {
            return password;
        },
    },
    {
        name: 'code what',
        message: 'what do you want to code:',
        type: 'input'
    },
    {
        name: 'confirm yes',
        message: 'are you sure! do you want to submit',
        type: 'confirm'
    }
]).then(() => {
    if (form) {
        chalkcolor.custom(`${chalkcolor.varcompleted()} ${chalk.hex('#0f0')('Your quiz has successfully submitted')}`)
    }
});
inquirer.registerPrompt("date", require("inquirer-date-prompt"));