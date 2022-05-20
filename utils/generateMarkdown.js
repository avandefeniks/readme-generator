// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return '';
  }
  else if (license === 'ISC') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  }
  else if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if (license === 'GNU') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ![](./assets/images/TuneBlastHeroCopy.jpg)

  ## Description ##
${data.description}
![](./assets/images/Lyrics.jpg)

  ### Table of Contents ###
  * [Installation](#install) 
  * [Usage](#usage) 
  * [License](#license)
  * [Contributing](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)

 ### Installation<a name="install"></a> ###
 ${data.install}
 
 ### Usage<a name="usage"></a> ###
 ${data.usage}
 
 ### License<a name="license"></a> ###
 
 
 ### Contributing<a name="contribute"></a> ###
 ${data.contribute}
 
 ### Tests<a name="tests"></a> ###
 ${data.tests}
 
 ### Questions<a name="questions"></a> ###
 For further questions please contact me at the following:<br>
 [GitHub](https://github.com/${data.github})<br>
 [${data.email}](mailto:${data.email})

`;
};

module.exports = generateMarkdown;
