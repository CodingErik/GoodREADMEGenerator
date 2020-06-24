const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');




// array of questions for user
const questions = [
    // THIS IS THE NAME SECTION ********************
    {
        type: 'input',
        message: 'What is your name',
        name: 'name',
        validate: validateEntries
    },
    // THIS IS THE ROLE SECTION ********************
    {
        type: 'input',
        message: 'What is your role in the project',
        name: 'role',
        validate: validateEntries
    },
    // THIS IS THE TITLE SECTION ********************
    {
        type: 'input',
        message: 'What is the title of your project',
        name: 'title',
        validate: validateEntries
    },
    // THIS IS THE DESCRIPTION SECTION ********************
    {
        type: 'input',
        message: 'Please, provide a brief description of you project.',
        name: 'description',
        validate: validateEntries
    },
    // THIS IS THE INSTALLATION SECTION ********************
    {
        type: 'input',
        message: 'Please, provide an explanation of how to install the software',
        name: 'Installation',
        validate: validateEntries
    },
    // THIS IS THE USAGE SECTION ********************
    {
        type: 'input',
        message: 'Provide instructions and examples for use of this program',
        name: 'Usage',
        validate: validateEntries
    },
    // THIS IS THE LICENSE SECTION ********************
    {
        type: 'list',
        message: 'Please check the license you would like to use for this project',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'GNU FDL v1.3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'IBM Public License Version 1.0',
            'Eclipse Public License 1.0',
            'Unlicense'
        ],
        name: 'license'
    },
    // THIS IS THE CONTRIBUTING SECTION ********************
    {
        type: 'input',
        message: 'Please specify the way you would like a contributor to contribute',
        name: 'contributing',
        validate: validateEntries
    },
    // THIS IS THE TEST SECTION ********************
    {
        type: 'input',
        message: 'Please enter any testing code you would like to provide',
        name: 'test',
        validate: validateEntries
    },
    // THIS IS THE CREDIT/CONTACT INFO SECTION ********************
    // THIS IS THE userName INFO SECTION ********************
    {
        type: 'input',
        message: 'Please enter your github user name',
        name: 'userName',
        validate: validateEntries

    },
    // THIS IS THE userEmail INFO SECTION ********************
    {
        type: 'input',
        message: 'Please enter your github user email',
        name: 'userEmail',
        validate: value => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) ? true : 'this is not a valid email adress'
    }
];

// GETLICENSE 
// ***************************************
function getLicenseLink(licenseName) {

    switch (licenseName) {
        case 'GNU AGPLv3': return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0`;
        case 'GNU GPLv3': return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        case 'GNU LGPLv3': return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
        case 'GNU FDL v1.3': return `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`;
        case 'Mozilla Public License 2.0': return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        case  'Apache License 2.0': return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case  'MIT License': return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case  'Boost Software License 1.0': return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        case  'IBM Public License Version 1.0': return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
        case  'Eclipse Public License 1.0':  return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        case  'Unlicense': return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
        default: return `Something went really wrong! did you pick a license?`;
    };

}
// ***************************************

// validateEntries
// this function validates entries for the user inputs
// and returns the value if it is valid 
// ***************************************
function validateEntries(value) {
    // checks the for the name and regexes accordingly 
    if (value === '') {
        return 'this is not a valid input';
    } else {
        return true;
    };
}

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        (err) ? console.log(err) : console.log(`file has been written Succesfully!!!`);
    });
}

// function to initialize program
async function init() {

    // using .then with promises
    // inquirer returns a promise so then we deal with the promise 
    // inquirer.prompt(questions)
    // .then((data) => { console.log(data); writeToFile('./GeneratedREADME/README.md', data); return getLicense(data.license)})
    // .catch( err => console.log(err.message))
    // .then( license => console.log(`this should be the license chosen ${license}`))
    // .catch( err => console.log(err.message));

    // Using await and async
    let object = await inquirer.prompt(questions);

    // this wait for the inquirer to be done return the specified link
    object.licenseBadge = await getLicenseLink(object.license); 
    
    let writeREADME = await writeToFile('./GeneratedREADME/README.md', object);
    


}

// function call to initialize program
init();


