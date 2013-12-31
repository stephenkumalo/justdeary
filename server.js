var express = require( 'express' );
var https = require( 'https' );
var port = 3700;
var app = express();
app.use(express.logger());

app.use(express.static(__dirname + '/public'));

app.get("/insta", function(req, res){

	var tag = req.query.tag;
	var access_token = "52817678.467ede5.752fc2b103ce40ff82aa1bbbdf7211f5";
	var instagram_api_call = "https://api.instagram.com/v1/tags/" + tag +"/media/recent?access_token=" + access_token;

	var jsonResponse = "";

	var apiRequest = https.get(instagram_api_call, function(httpResponse) {

		httpResponse.on('data', function(d) {
		    jsonResponse += d;
		});

		httpResponse.on('end', function(){
			var responseObject = JSON.parse( jsonResponse );
			console.log(responseObject);
			res.send( responseObject );
		});
	});

	apiRequest.on('error', function(e) {
		res.send( e );
	});

	apiRequest.end( );
});

app.listen(port);
console.log("Mysite is running on localhost:" + port);