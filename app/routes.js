/**
 * User: harshsingh
 * Date: 3/14/14
 * Time: 4:05 PM

 */
module.exports = function(app) {

    // server routes
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/demo', function(req, res) {

    });


    // frontend routes

    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load public/views/index.html file
    });

};