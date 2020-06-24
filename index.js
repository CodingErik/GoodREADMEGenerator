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
function getLicense(licenseName){
    return licenseName;
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
        (err)? console.log(err): console.log(`file has been written Succesfully!!!`);
    }); 
}

// function to initialize program
function init() {
    
    // inquirer returns a promise so then we deal with the promise 
    inquirer.prompt(questions)
    .then((data) => { console.log(data); writeToFile('./GeneratedREADME/README.md', data); return getLicense(data.license)})
    .catch( err => console.log(err.message))
    .then( license => console.log(`this should be the license chosen ${license}`))
    .catch( err => console.log(err.message));

}

// function call to initialize program
init();


