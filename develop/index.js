// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from 'Read-Me-Generator/develop/utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'BSD'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },
]
    
   // TODO: Create a function to write README file
   function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log(`Successfully created ${fileName}`);
      }
    });
  }


// TODO: Create a function to initialize app
async function init() {
    try {
      console.log('Welcome to the Professional README Generator!\n');
      console.log('Answer the following questions to generate your README.md file:\n');
      
      const answers = await inquirer.prompt(questions);
      const markdownContent = generateMarkdown(answers);
      
      writeToFile('README.md', markdownContent);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
// Function call to initialize app
init();
