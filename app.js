"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var controllers = require('./controllers');

var app = express();

app.use(bodyParser.json());
app.use(controllers);
app.use(function(err, req, res, next){
    res.status(500).send(err);
});

module.exports = app;
