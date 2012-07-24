var http = require('http');
var fugue = require('fugue');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello World! 2');
});

fugue.start(server, 4000, null, 2, {
  master_pid_path : '/tmp/master.pid'
});