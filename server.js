var express = require('express');
var port = process.env.PORT || 3700;
var app = express();
app.use(express.logger());

app.use(express.static(__dirname + '/public'));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.listen(port);
console.log("Mysite is running on localhost:" + port);