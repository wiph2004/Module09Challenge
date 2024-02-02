// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "GNU": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "Creative Commons Zero": "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  }
  
  const licenseBadge = badge[license];
  
  return licenseBadge;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (userInput) => {
  const  { title, description, installation, usage, contribution, testing, license, username, email } = userInput;
  const output = `# ${title}

  License: ${license}
      
  ## Table of Contents

  [Description](#description)\n
  [Questions](#questions)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Credits](#credits)\n
  [License](#license)\n
  [Testing](#testing)\n


  ## Description
  
  ${description}    
  
  ## Questions

  Github Loc: https://github.com/${username}\n
  For additional questions, you can contact me at: ${email}

  ## Installation 

      ${installation}
      
  ## Usage 
  
      ${usage}
      
  ## Credits 

      ${contribution}
      
  ## License 

      ${renderLicenseBadge(license)}
      
  ## Testing 

      ${testing}`;

return output;

};

module.exports = generateMarkdown;
