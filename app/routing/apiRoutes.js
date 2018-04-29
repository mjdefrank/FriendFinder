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
			//declare an empty score array
			let scoreArray = [];
			//create a loop to run through each friends object
			for (let i=0; i < friends.length; i++) {
				//declare a compatability var
				let compatability = 0;
				//create a loop to run through current friends scores
				for (let j=0; i<10; j++) {
					//create a compare score var; take absolute value of current friends score, subtract the scores from the body
					let compareScore = Math.abs(parseInt(friends[i].scores[j]) - parseInt(req.body.scores[j]));
					//increase compatability by difference
					compatability += compareScore;
				}
				//push compatability into scoreArray
				scoreArray.push(parseInt(compatability));
			};
			//print entire score array
			console.log(scoreArray);
			//	
			let match = Math.min(scoreArray);
			console.log(match)
			friends.push(req.body);
			res.json(friends[match]);
		});
		
	};

	module.exports = htmlRoutes;