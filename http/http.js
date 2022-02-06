const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('<h1>Hello, World!</h1>');
}

const server = http.createServer(requestListener);
server.listen(8080);

// var http = require('http');
//
// //create a server object:
// http.createServer(function (req, res) {
//   res.write('vfHello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080
