const fetch = require('node-fetch');


async function getGithubProf(userName) {

    // here we wait for the github API to get us the json
    let gitHubData = await fetch(`https://api.github.com/users/${userName}/repos?per_page=100`);

    let dataJSON = await gitHubData.json();
    
    // get the owner url 
    return ` ${dataJSON[0]['owner']['html_url']}`; 

}
// we gotta get the userName and then call the github API and get the data
// getGithubProf('codingErik');
module.exports = {getGithubProf};

// // test with promises 
// fetch(`https://api.github.com/users/codingErik/repos?per_page=100`)
// .then(response => {
//     console.log(response); 
// })