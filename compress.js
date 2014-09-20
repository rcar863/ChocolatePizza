// Load the http module to create an http server.
var count = 0;
var request = require('request');
var pageToRequest = "http://marcusklein.github.io/1984.txt";
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Server is online, requesting page from ' + pageToRequest);

request.get( pageToRequest, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var text = body;
        // Continue with your processing here.
        var fs = require('fs');
    fs.writeFile("text" + count + ".txt", text, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
        count++;
    }
}); 
      
  var sys = require('sys')
  var exec = require('child_process').exec;
  function puts(error, stdout, stderr) { sys.puts(stdout); }
  exec("xz -z " + "text"  + count + ".txt", puts);
  exec("echo compressed the file", puts);
      
    }
});
  
}).listen(1337, '0.0.0.0');

// Put a friendly message on the terminal
console.log("Server running at http://0.0.0.0:1337/");