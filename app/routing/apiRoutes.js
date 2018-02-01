//import body parser and path modules, import data from friends.js
var bodyParser = require('body-parser');
var path = require('path');
var friendList = require('../data/friends.js');

module.exports = function(app){
		//pull data from friends table
		app.get('/api/friends', function(req, res)
		{
			res.json(friendList);
		});
		//push info from page into friend array
		app.post('/api/friends', function(req, res)
		{
			friendList.push(req.body);
		});
		
	};