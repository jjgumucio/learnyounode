var http = require('http');
var url = require('url');
var strft = require('strftime');

var processParseTime = function(qObj) {
  var date = new Date(qObj.iso);
  var timeObj = {
    hour: Number(strft('%H', date)),
    minute: Number(strft('%M', date)),
    second: Number(strft('%S', date))
  };

  return JSON.stringify(timeObj);
};

var processUnixTime = function(qObj) {
  var date = new Date(qObj.iso);
  return JSON.stringify({unixtime: Number(date.getTime())});
};

http.createServer(function(req, res) {
  if ( req.method === 'GET' ) {
    var parsedUrl = url.parse(req.url, true);

    // Router:
    var pathname = parsedUrl.pathname;
    if ( pathname === '/api/parsetime' ) {
      res.writeHead(200, { 'Content-Type': 'application/json'});
      res.end(processParseTime(parsedUrl.query));
    }

    else if ( pathname === '/api/unixtime' ) {
      res.writeHead(200, { 'Content-Type': 'application/json'});
      res.end(processUnixTime(parsedUrl.query));
    }
  }
}).listen(process.argv[2]);
