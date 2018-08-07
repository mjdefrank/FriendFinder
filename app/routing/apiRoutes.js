//Import data from friends.js
var friends = require('../data/friends.js');

const apiRoutes = function (app) {
	//pull data from friends table
	app.get('/api/friends', function(req, res)
	{
		//respond with json data from the friends array
		res.json(friends);
	});
	//post scores and return best match
	app.post('/api/friends', function (req, res) {
		//create blank array for scores
		var scoreArray = [];
		//loop through friends array
        for (var i = 0; i < friends.length; i++) {
			//create a local var for compatability
			var compatibility = 0;
			//loop through each response in the current friend
            for (var j = 0; j < 10; j++) {
				//
                var compareScore = Math.abs(parseInt(friends[i].scores[j]) - parseInt(req.body['scores[]'][j]));
				//set compatability var = to the difference in scores
				compatibility += compareScore;
			}
			//push the compatability var into the score array
			scoreArray.push(parseInt(compatibility));
        }
        console.log(scoreArray);
        Array.min = function( scoreArray ){
            return Math.min.apply( Math, scoreArray );
        };
        var closestScore = Array.min(scoreArray);
		console.log("Post successful!")
		console.log(closestScore);
        bestMatch = scoreArray.indexOf(closestScore);
        friends.push(req.body);
        res.json(friends[bestMatch]);
    });
};

	module.exports = apiRoutes;