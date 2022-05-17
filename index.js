// )TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project: (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter installation instructions: (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                }
                else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage instructions: (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }
                else {
                    console.log('Please enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to choose a license for your project?',
            default: false

        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose your preferred license',
            choices: ['ISC', 'MIT', 'GNU'],
            when: ({ confirmLicense }) => confirmLicense
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can people contribute to your project? (Required)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                }
                else {
                    console.log('Please enter contribution instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How to run tests on your project: (Required)',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                }
                else {
                    console.log('Please enter test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }

    ]);
};

questions()

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
