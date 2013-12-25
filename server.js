var express = require('express');
var port = process.env.PORT || 0049;
var app = express();
app.use(express.logger());

app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log("Mysite is running on localhost:" + port);
setInterval(function(){ }, 30000);