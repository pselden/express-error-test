"use strict";

var nconf = require('nconf');
var path = require('path');

var env = process.env.NODE_ENV || 'development';
nconf
    .defaults({
        env: env
    })
    .argv()
    .env();


module.exports = nconf;