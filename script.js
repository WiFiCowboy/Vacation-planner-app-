let states = [];

// The user must be able to search for parks in one or more states.
function getStates(){
    $('.userRequest').submit(event => {
        // let pushArr = [];
        event.preventDefault();
        let value = $('#states').val();
        states.push(value);
        $('#states').val('');
        renderStates();
    });
};


function renderStates(){
    for (let i = 0; i < states.length; i++){
        $('.displayUserStates').append(`<h6>${states[i]}</h6>`);
        $('.displayUserStates').removeClass('hidden');
    }
};

// The user must be able to set the max number of results, with a default of 10.
// The search must trigger a call to NPS's API.
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