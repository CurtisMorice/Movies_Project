console.log('JS');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('#refresh').on('click', refresh);
    $('#addMovies').on('click', addMovies);

} //end of readyNow

function getMovies() {
    //makes a GET call
    //when back from server loop through movies[]
    //display on dom

    console.log('in getMovies');

} // end of getMovies

function addMovies() {
    console.log('in addMovies');
    //get user input and create an object to send to the server
    let objectToSend = {
        title: $(`#title`).val(),
        director: $(`#director`).val(),
        year: $(`#year`).val(),
        genre: $(`#genre`).val(),
    }; //end of objectToSend
    //create an $ajax call to /movies
    $ajax: ({
        method: 'POST',
        url: '/movies',
        data: objectToSend,
    }).then(function(response) {
        console.log('in POST handshake', response);
        getMovies();
    }); //end of $ajax POST
    //when back from server update DOM 


} //end of addMovies

function refresh() {
    console.log('in refresh');
}