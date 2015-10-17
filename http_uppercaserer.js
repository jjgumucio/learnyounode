var http = require('http');

http.createServer(function(req, res) {
  if ( req.method === 'POST' ) {
    req.on('data', function(data) {
      res.write(data.toString().toUpperCase());
    });
    req.on('end', function() {
      res.end();
    });
  }
}).listen(process.argv[2]);
