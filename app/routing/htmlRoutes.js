//use the path module
const path = require('path');

//exports function to provide HTML pages by route path
const htmlRoutes = function (app) {
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};

module.exports = htmlRoutes;