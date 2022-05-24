// import files and packages up here
const express = require('express');

// create your express server below
const app = express();

// add your routes and middleware below
app.get('/', function(req, res){
    res.status(200).send('New Express server');
});

// finally export the express application
module.exports = app;
