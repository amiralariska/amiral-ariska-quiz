#!/usr/bin/env node
var chalk = require('chalk');
var gradient = require('gradient-string');
var inquirer = require('inquirer');
const chalkcolorquiz = require('chalk-color-style-quiz');

var welcome = gradient('blue', 'cyan')('Welcome to Amiral Ariska Quiz');
console.log(welcome);

var password = 'CodeAmiral';
inquirer.prompt([
    {
        name: 'full name',
        message: 'what is your full name:',
        type: 'input',
        // validate: (input) => input.trim() !== '' || 'Full name cannot be blank!'
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
        type: 'input',
        // validate: (input) => input.trim() !== '' || 'City cannot be blank!'
    },
    {
        name: 'gender',
        message: 'what is your gender:',
        type: 'list',
        choices: [
            'Male',
            'Female',
            'Prefer not to say'
        ]
    },
    {
        name: 'password',
        message: 'please enter password to continue:',
        type: 'input',
        default: password
    },
    {
        name: 'code what',
        message: 'what do you want to code:',
        type: 'input',
        // validate: (input) => input.trim() !== '' || 'This field cannot be blank!'
    },
    {
        name: 'confirm yes',
        message: 'Are you sure! do you want to submit',
        type: 'confirm'
    }
]).then((answers) => {
    if (answers['full name'].trim() === '' || answers['city'].trim() === '' || answers['code what'].trim() === '') {
        chalkcolorquiz.log(`${chalkcolorquiz.blankfailed()} ${chalk.hex('#f00')('Please fill in all required fields!')}`);
    } else {
        chalkcolorquiz.log(`${chalkcolorquiz.blankcompleted()} ${chalk.hex('#0f0')('Your quiz has successfully submitted')}`);
    }
});
inquirer.registerPrompt("date", require("inquirer-date-prompt"));