var express = require('express');
var app = express();
var http = require('http');
app.use(express.static(__dirname+'/'));
app.listen(process.env.PORT || 5000); //HEROKU

app.get("*", function(req, res) {
	res.sendFile('./index.html'); //load single view file
});