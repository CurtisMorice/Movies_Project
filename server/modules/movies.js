let express = require('express');
let router = express.Router();

let movieArray = [];

router.get('/', (req, res) => {
    console.log('in /movies GET:');
    res.send('raaaallllph');

}); //end movies GET

router.post('/', (req, res) => {
    console.log('in /movies POST:', req.body);
    res.send('baaarrrrrrrrffff');

}); //end movies POST



class Movie {
    constructor(title, director, year, genre) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.genre = genre;

    }

}
modules.export = router;