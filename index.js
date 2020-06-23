let inquirer = require('inquirer'); 



// array of questions for user
const questions = [
    {
        type: 'input', 
        message: 'What is the title of your project',
        name: 'title',
        validate: validateEntries
    },
    {
        type: 'input',
        message: 'Please, provide a brief description of you project.',
        name: 'description',
        validate: validateEntries
    },
    {
        type: 'input',
        message: 'Please, provide an explanation of how to install the software',
        name: 'Installation',
        validate: validateEntries
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'Usage',
        validate: validateEntries 
    },
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
    {
        type: 'input',
        message: 'Please specify the way you would like a contributor to contribute',
        name: 'contributing',
        validate: validateEntries
    },
    {
        type: 'input',
        message: 'Please enter any testing code you would like to provide',
        name: ''
    }
];

// validateEntries
// this function validates entries for the user inputs
// and returns the value if it is valid 
// ***************************************
function validateEntries(){
        // checks the for the name and regexes accordingly 
}



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


