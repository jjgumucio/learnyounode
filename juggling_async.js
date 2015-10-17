var http = require('http');
var bl = require('bl');
var counter = 0;

var urls = process.argv.slice(2, process.argv.length);
// console.log(urls);
var responses = [];

urls.map(function(cv, index, arr) {

  http.get(cv, function(res) {
    res.pipe(bl(function(err, data) {
      if ( err ) {
        return console.log(err);
      }

      responses[index] = data.toString();

      (function() {
        if ( counter === 2 ) {
          responses.forEach(function(cv) {
            console.log(cv);
          });
        }
        counter += 1;
      })();
    }));
  });
});
