/**
 * User: harshsingh
 * Date: 3/14/14
 * Time: 3:38 PM
 */

// load modules
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash 	 = require('connect-flash');


// config
var db = require('./config/db.js');

//connect to db
mongoose.connect(db.url, function(err) {
    if (err) throw err;
});


// pass passport for configuration
require('./config/passport')(passport);

//set port
var port = process.env.PORT || 8080;


app.configure(function() {
    app.set('views', __dirname + '/public/views');
    app.engine('html', require('ejs').renderFile);
    app.use(express.static(__dirname + '/public'));    // set the static files
    app.use(express.logger('dev')); 			      // logging
    app.use(express.cookieParser()); // read cookies (needed for auth)
    app.use(express.bodyParser());                   // have the ability to pull information from html in POST
    app.use(express.methodOverride()); 			    // simulate DELETE and PUT
    app.use(express.session({ secret: 'godconnection' })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session
});

// configure routes
require('./app/routes.js')(app, passport);

//start server and logging
app.listen(port);						  // startup our app at http://localhost:8080
console.log('Server Running at ' + port);
exports = module.exports = app;           // expose app