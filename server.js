var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.end('Servidor iniciado...'); //end the response
}).listen(56000); //the server object listens on port 8080