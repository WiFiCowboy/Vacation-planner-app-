let states = '';
const apiKey = 'l9Jpa2gHBgJQ7jQ7pJEdjagQaoDAuFkoGbbJSv3x@';
const searchURL = 'developer.nps.gov/api/v1/parks';
const queryParam = '?stateCode=';

// Example url for CA https://developer.nps.gov/api/v1/parks?stateCode=ca


// The user must be able to search for parks in one or more states.
function getStates(){
    $('.userRequest').submit(event => {
        event.preventDefault();
        states = $('#states').val().toLowerCase();
        console.log(states);
        grabMaxResults();
    });
};


// The user must be able to set the max number of results, with a default of 10.
function grabMaxResults() {
    let maxResults = '';
    maxResults = $('#returnResults').val(); 
    console.log(maxResults);
    
}

// The search must trigger a call to NPS's API.
function getUserRepo(){
    fetch('https://' + apiKey + searchURL + queryParam + states)
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            // skips next .then and goes to .catch
            throw new Error();
        }
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => errorHandle());
};

// function displayResults(responseJson){
//     resetResults();
//     for(let i = 0; i < responseJson.length; i++){
//         $('.displayParkInfo').append(
//             `<h2>Repo Name: ${responseJson[i].name}</h2>
//             <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>`
//           )
//     }
//     $('.results').removeClass('hidden');
// };

function errorHandle() {
    resetResults();
    $('.results').append(`<h3>States not found!</h3>`);
    $('.results').removeClass('hidden');
};

// The parks in the given state must be displayed on the page. Include at least:
// Full name
// Description
// Website URL
// The user must be able to make multiple searches and see only the results for the current search.
// As a stretch goal, try adding the park's address to the results.


function masterControl(){
    console.log('Script connected');
    getStates();

};

$(masterControl);