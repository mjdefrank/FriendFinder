//import functions from routing js files
const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');

//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up express
var app = express();
var PORT = process.env.PORT || 3000;
 
//set middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

apiRoutes(app);
htmlRoutes(app);

//turn on listener when run in node (port 3000)
app.listen(3000, function(){
	console.log('App listening on PORT ' + PORT);
});