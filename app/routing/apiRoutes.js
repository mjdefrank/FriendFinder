const htmlRoutes = function (app) {
	//Import data from friends.js
	var friends = require('../data/friends.js');

	//pull data from friends table
		app.get('/api/friends', function(req, res)
		{
			res.json(friends);
		});
		//push info from page into friend array
		app.post('/api/friends', function(req, res)
		{
			let scoreArray = [];
			for (let i=0; i < friends.length; i++) {
				let compatability = 0;
				for (let j=0; i<10; j++) {
					let compareScore = Math.abs(parseInt(friends[i].scores[j]) - parseInt(req.body['scores[]'][j]));
					compatability += compareScore;
				}
				scoreArray.push(parseInt(compatability));
			};
			console.log(scoreArray);	
			Array.min = (scoreArray) => {
				return Math.min.apply( Math, scoreArray);
			};
			let closestScore = Array.min(scoreArray);
			console.log(closestScore)
			friends.push(req.body);
			res.json(friends[bestMatch]);
		});
		
	};

	module.exports = htmlRoutes;