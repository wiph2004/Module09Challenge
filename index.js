const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

const licenseChoices = [
    'MIT',
    'GNU',
    'Creative Commons Zero',
    'Apache 2.0'
    ];
// TODO: Create an array of questions for user input
inquirer
    .prompt( [
{
    type: 'input',
    message: 'What is the title of the README?',
    name: 'title',
},
{
    type: 'input',
    message: 'Please add description:',
    name: 'description',
},
{
    type: 'input',
    message: 'Add installation instructions:',
    name: 'installation',
},
{
    type: 'input',
    message: 'Add usage information:',
    name: 'usage',
},
{
    type: 'input',
    message: 'Add contribution guidlines:',
    name: 'contribution',
},
{
    type: 'input',
    message: 'Add test instructions:',
    name: 'testing',
},
{
    type: 'list',
    message: 'Please choose a license',
    choices: licenseChoices,
    name: 'license',
},
{
    type: 'input',
    message: 'Add gihub username',
    name: 'username',
},
{
    type: 'input',
    message: 'Add email address',
    name: 'email',
},
])
.then((answers) => {
    const fileContents = generateMarkdown(answers);
    const { title } = answers;
    const fileName = title.toLowerCase().replace(" ", "-");
    
    fs.writeFile (`${fileName}.md`, fileContents, (err) => {
    if (err) {
        console.error('Error writing to file: '. err);
    }
    else {
        console.log('Success')
    }
    })

});


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
