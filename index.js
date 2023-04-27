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
      if (input.length <= 3) {
          return '❗Please enter a valid project name.❗';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project.',
    validate: function (input) {
      if (input.length <= 3) {
          return '❗Please enter an in depth project description.❗';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? (Deployed Application Link)',
    validate: function (input) {
      if (input.length <= 3) {
          return '❗Please provide your deployed application link or instructions on how to install your project.❗';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. It is recommended that you later add screenshots with alt text.',
    validate: function (input) {
      if (input.length <= 3) {
          return '❗Please provide instructions on how to use your application.❗';
      }
      return true;
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license to let other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/). ',
    choices: ['(N/A)', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, or any third-party assets that require attribution. If you followed tutorials, include links to those here as well.',
    validate: function (input) {
      if (input.length <= 2) {
          return '❗Please list your collaborators, if any.❗';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'It is recommended to create tests for your application. Share sample instructions on how to run the tests in this section.',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username.',
    validate: function (input) {
      if (input.length <= 3) {
          return '❗Please enter a valid GitHub username.❗';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter an email address where users will be able to reach you.',
    validate: function (input) {
      if (input.length <= 3) {
          return '❗Please enter a valid email address.❗';
      }
      return true;
    }
  }
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {

    fs.writeFile('./generated/README.md', generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
}

// Function call to initialize app
init();
