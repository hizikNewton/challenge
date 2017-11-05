var express = require("express");
var path = require("path");
var http = require("http");

var myapp = express();
/*var publicpath = path.resolve(__dirname,"public");

myapp.use(express.static(publicpath));

myapp.use(function(req,res){

	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("no static file found");
});
http.createServer(myapp).listen(3000);
*/

myapp.use(function(req,res,next){
	console.log("in come the request"+req.method+"to"+req.url);
	next()
})
myapp.use(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("Hello world");
})
http.createServer(myapp).listen(3000);