// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
  else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  else if (license === 'ISC') {
    return `[ISC](https://opensource.org/licenses/ISC)<br>
  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above 
  copyright notice and this permission notice appear in all copies.`;
  }
  else if (license === 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)<br>
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
  to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
  and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:`;
  }
  else if (license === 'GNU') {
    return `[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)<br>
  The GNU General Public License is a free, copyleft license for software and other kinds of works.`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  else {
    return `### License<a name="license"></a> ###`;
  }
};

function renderLicenseTableOfContents(license) {
  if (!license) {
    return '';
  }
  else {
    return `* [License](#license)`;
  }
};

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
  ${renderLicenseTableOfContents(data.license)}
  * [Contributing](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)

 ### Installation<a name="install"></a> ###
 ${data.install}
 
 ### Usage<a name="usage"></a> ###
 ${data.usage}
 
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

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
