"use strict";

var express = require('express');
var router = express.Router();
var FailingController = require('./failingController').FailingController;

router.use(new FailingController());

module.exports = router;