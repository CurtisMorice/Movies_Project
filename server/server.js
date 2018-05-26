const express = require('express');
const app = express();
const MOVIE = require('./modules/movies');
let bodyParser = require('body-parser');

let router = require('./modules/movies');

let newMovie = new Movie(title, director, year, genre);
const port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Listening on port', port);

});