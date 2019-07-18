// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello World from Node.js app 2!!!</h1>\n");
  response.end();
});

server.listen(8002);
