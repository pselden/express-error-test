"use strict";

var app = require('./app');
var config = require('./config');

app.set('port', config.get('port') || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

module.exports = server;