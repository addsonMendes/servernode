var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    console.log('Servidor iniciado na porta 56000');
//   res.write('Hello World!'); //write a response to the client
  res.end('Servidor iniciado...'); //end the response
}).listen(56000); //the server object listens on port 8080