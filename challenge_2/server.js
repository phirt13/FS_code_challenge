var http = require("http");
var fs = require("fs");
var host = "localhost";
var port = 5000;

fs.exists("./index.html", function(file) {
  if (file) {
  console.log("That file path exists.");
  } else {
  console.log("That file path does not exist. Your an idiot");
  }
});

var server = http.createServer(function(request, response) {
  console.log("Recieved request: " + request.url);
  fs.readFile("./index.html", function(error, data) {
    if(error) {
      response.writeHead(404, {"Content-type":"text/plain"});
      response.end("Sorry this page does not exist");
    } else {
      response.writeHead(200, {"Content-type":"text/html"});
      response.end(data);
    }
  });
});

server.listen(port, host, function() {
  console.log("Your server is running at: " + host + ":" + port);
});
