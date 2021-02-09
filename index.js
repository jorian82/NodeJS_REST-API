/**
 * Primary file for the API
 * 
 */

 // Dependencies
 const http = require('http');
 const url = require('url');

 // The server should respond to all requests with a string
const server = http.createServer(function(req, res){

    // Get the url and parse it
    const parsedURL = url.parse(req.url, true);

    // Get path

    const path = parsedURL.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // Send response
    res.end('Hello World!!!\n');

    // Log request path
    console.log('Request received on path: '+trimmedPath);

});

 // Start the server, have it listen to port 3000
 server.listen(3000, function(){
     console.log("Server listening on port 3000");
 })