/**
 * User: harshsingh
 * Date: 3/14/14
 * Time: 3:38 PM
 */

// load modules
var express = require('express');
var app     = express();
var mongoose= require('mongoose');

// config
var db = require('./config/db');

//set port
var port = process.env.PORT || 8080;

app.configure(function() {
    app.use(express.static(__dirname + '/public')); 	// set the static files
    app.use(express.logger('dev')); 					// logging
    app.use(express.bodyParser()); 						// have the ability to pull information from html in POST
    app.use(express.methodOverride()); 					// simulate DELETE and PUT
});

// configure routes
require('./app/routes')(app);

//start server and logging
app.listen(port);						  // startup our app at http://localhost:8080
console.log('Server Running at ' + port);
exports = module.exports = app;           // expose app