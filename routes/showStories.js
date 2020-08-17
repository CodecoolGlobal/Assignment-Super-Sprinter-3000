var express = require('express');
var router = express.Router();

var fs = require('fs');

var data;

router.get('/', function (req, res, next) {
    data = fs.readFileSync('data.csv')
        .toString() // convert Buffer to string
        .split('\n') // split string to lines
        .map(e => e.trim()) // remove white spaces for each line
        .map(e => e.split(',').map(e => e.trim())); // split each line to array
    /* GET users listing. */
    res.render('showStories.ejs', {data: data});
});

module.exports = router;
