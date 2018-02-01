//use the path module
var path = require('path');

//exports function to provide HTML pages by route path
module.exports = function(app){
	//send the survey when localhost:3000/survey is accessed
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
	//send the home.html file when localhost:3000/ is accessed
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

};