const inquirer = require("inquirer");
const fs = require("fs");

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
    choices: [
        'MIT',
        'None',
        'Other',
        ],
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
    const fileContents = generateHTML(answers);
    const { name } = answers;
    
    fs.writeFile ('README.md', fileContents, (err) => {
    if (err) {
        console.error('Error writing to file: '. err);
    }
    else {
        console.log('Success')
    }
    })

});

const generateHTML = (userInput) => {
    const  { title, description, installation, usage, contribution, testing, license, username, email } = userInput;
    const output = `
    # ${title}

    Made by: ${username}
    Contact: ${email}
    
    ## Table of Contents

    [Description](link)
    [Installation](link)
    [Usage](link)
    [Credits](link)
    [License](link)
    [Testing](link)


    ## Description
    
    ${description}    
    
    
    ## Installation 
        ${installation}
        
    ## Usage 
    
        ${usage}
        
    ## Credits 
        ${contribution}
        
    ## License 
        ${license}
        
    ## Testing 
        ${testing}`;

return output;

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
