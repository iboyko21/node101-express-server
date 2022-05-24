// import files and packages up here
const express = require('express');
const morgan = require('morgan');

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'));

var requestCount = 0;
app.use(function(req, res, next) {
    requestCount++;
    console.log('Request number: ' + requestCount);
    next();
});

app.get('/', function(req, res) {
    res.status(200).send('This is the / route');
});

const data = require('./data.json');
app.get('/data', function(req, res){
    res.json(data);
});

// finally export the express application
module.exports = app;
