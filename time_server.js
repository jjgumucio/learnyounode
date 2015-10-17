var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  var connectionTime = new Date();
  socket.end(strftime('%F %R', connectionTime));
}).listen(process.argv[2]);
