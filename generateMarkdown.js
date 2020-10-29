// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}

  ${data.licenseBadge}
  ![GitHub followers](https://img.shields.io/github/followers/CodingErik?logo=GitHub&style=flat)
  ![GitHub language count](https://img.shields.io/github/languages/count/CodingErik/Google-Books-Search?color=orange&logo=GitHub&style=flat)

  ## Description
  
  ${data.description}
  
  
  ## Table of Contents 
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  
  
  ## Installation
  
  ${data.Installation}
  
  
  ## Usage
  
  ${data.Usage} 
  
  Include screenshots as needed. 
  
  
  ## Credits
  
  * ${data.name}, ${data.role}: Email: [${data.userEmail}](emailTo:${data.userEmail}), Github Username: ${data.userName} Github Link: ${data.gitHubLink}

  ## Licensed 🏆 
  
  ${data.license}   
  
  ## Contributing 
  
  ${data.contributing}
  
  [Contributor Covenant](https://www.contributor-covenant.org/)
  
  ## Test
  
  ${data.test}
  
`;
}

module.exports = generateMarkdown;
