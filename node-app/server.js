var util = require('util');
var http = require('http');
var port = process.env.PORT || process.env.port || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var PropertiesReader = require('properties-reader');

var server = http.createServer(function (req, res) {

   req.on('data', function (data) {});
   req.on('end', function () {
      console.log("Invoked");
      //var properties = PropertiesReader('/etc/node-app/node-app.config');
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<html><head><title></title></head>');
      console.log(process.env.color);
      res.write('<body bgcolor="' + process.env.color + '">');
      res.write('<h1>' + process.env.BACKGROUND_MSG + '</h1>');
      res.write('<h1>' + process.env.BACKGROUND_MSG + '</h1>');
      res.write('</body>');
      res.end('\n');
   });

});
console.log('Initializing Server on ' + ip + ':' + port);
server.listen(port,ip, function(){
   var address = server.address();
   console.log('Server running on ' + address.address + ':' + address.port);
});
