//import express, body parser and path per instrcution
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up express variable
var app = express();
//set port
var PORT = process.env.PORT || 3000;
 
//set up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//import functions from routing js files
require('./app/routing/apiRoutes.js');
require('./app/routing/htmlRoutes.js');

//turn on listener when run in node (port 3000)
app.listen(3000, function(){
	console.log('App listening on PORT ' + PORT);
});