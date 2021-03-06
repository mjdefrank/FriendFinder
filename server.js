//import functions from routing js files
const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');

//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up express
var app = express();
var PORT = process.env.PORT;
 
//set middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//invoke route instances
apiRoutes(app);
htmlRoutes(app);

//turn on listener when run in node
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});