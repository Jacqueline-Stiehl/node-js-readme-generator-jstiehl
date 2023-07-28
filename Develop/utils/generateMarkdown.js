function renderLicenseBadge(license) {
  if (license === "Apache-2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0/)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT/)";
  } else if (license === "GNU-GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "";
  }
}

function renderLicenseLink(license) {
  if (license === "Apache-2.0") {
    return `${"https://opensource.org/licenses/Apache-2.0"}`;
  } else if (license === "MIT") {
    return `${"https://opensource.org/licenses/MIT"}`;
  } else if (license === "GNU-GPLv3") {
    return `${"https://www.gnu.org/licenses/gpl-3.0"}`;
  } else {
    return "";
  }
}

function generateMarkdown(responses) {
  return `# ${responses.title}
${renderLicenseBadge(responses.license)}

## Description
${responses.motivation}
${responses.why}
${responses.solve}
${responses.learn}
    
## Table of Contents
### [Installation](#installation)
### [Usage](#usage)
### [License](#license)
### [Contributing](#contributing)
### [Tests](#tests)
### [Questions](#questions)
    
## Installation
${responses.steps}
    
## Usage
${responses.examples}
${responses.features}
    
## License
The license for this project is ${
    responses.license
  } and the link for license information is ${renderLicenseLink(
    responses.license
  )}.
    
## Contributing
${responses.collaborators}
${responses.contributing}
    
## Tests
${responses.tests}

## Questions
Please find more information at my GitHub, located [here](https://github.com/${
    responses.github
  }).
    If you have additional questions, please contact me at ${responses.email}.`;
}

module.exports = generateMarkdown;
