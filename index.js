// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Internal Packages
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: function(input) {
      if (input.length < 1) {
          return 'Please enter a valid project name. 🥺';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project.',
    validate: function (input) {
      if (input.length < 1) {
          return console.log('Please enter an in depth project description. 🥺');
      }
      return true;
    }
  },
  {
    type: 'confirm',
    name: 'contents',
    message: 'Would you like to include a table of contents in your README (Suggested for lengthy README files)',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? (Deployed Application Link)',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
  },
  {
    type: 'input',
    name: 'license',
    message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/). ',
  },
];


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const userInput = generateMarkdown(answers)

    fs.writeFile('README.md', userInput, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
}

// Function call to initialize app
init();
