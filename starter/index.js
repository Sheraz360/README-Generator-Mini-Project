const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:',
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} has been generated successfully!`);
  });
}

// Function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((userInput) => {
      const markdownContent = generateMarkdown(userInput);
      const fileName = path.join(__dirname, 'README.md');
      writeToFile(fileName, markdownContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize program
init();
