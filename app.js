"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var controllers = require('./controllers');
var domain = require('domain');

var app = express();

app.use(function(req, res, next){
    var reqDomain = domain.create();
    reqDomain.on('error', next);
    reqDomain.run(next);
});
app.use(bodyParser.json());
app.use(controllers);

module.exports = app;
