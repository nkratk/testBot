var express = require("express");
var app =express();

app.use(express.static('public'));

var server = app.listen(8989, function () {
	var port = server.address().port;
	console.log("Server Started" + port );
});