"use strict";

var express = require('express');
var async = require('async');

function FailingController(){
    function fail(req, res, next){
        async.parallel([
            function(callback){
                setTimeout(function(){
                    console.log(req.params.p1);
                    callback('Its dead, Jim');
                }, 100);
            },
            function(callback){
                setTimeout(function(){
                    console.log(req.params.p1.abc + req.params.p2); // kaboom
                    callback();
                }, 500);
            }
        ], function(err){
            next(err);
        });
    }

    var router = express.Router();
    router.get('/fail/:p1?/:p2?', fail);
    return router;
}


exports.FailingController = FailingController;