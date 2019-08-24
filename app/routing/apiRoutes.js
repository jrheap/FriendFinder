// Inside this file i need to create a function maybe two that will compare the scores of the friends object and
// let the user know who he/she is most capibilty 
var friendData = require("../data/friends.js")



module.exports = function (app) {
    // GET gets data from somewhere else
    app.get("/api/friends", function(req,res){
        // post takes the user input and creates data
        // console.log(friendData)
        res.json(friendData);
        // console.log('couldnt think of anything')
        
         
    });

    app.post("/api/friends", function(req, res){
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        }
        // console.log(bestMatch)
        // console.log(req, 'this is the req')
        var userData = req.body;
        console.log(userData, "%%%%%%%%%%%%%%%%%%%%%");
        var userScores = userData.scores;
        console.log(userScores, '++++++++++++')

        var totalDifferance;

        for (let i = 0; i < friendData.length; i++) {
            const currentFriend = friendData[i];
            totalDifferance = 0
            // console.log(currentFriend)
            console.log(currentFriend)
            for (var j = 0; j < currentFriend.score.length; j++) {
                var currentFriendScore = currentFriend.score[j];
                // console.log(userScores, '================')
                var currentUserScore = userScores[j]
                totalDifferance += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            if (totalDifferance <= bestMatch.friendDifference) {
                // Reset the bestMatch to be the new friend.
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifferance;
              }
        }
        friendData.push(bestMatch);
console.log(bestMatch, '===============')
    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);
    })
// create for a foor loop that will run throuhg all the 
// for(var i = 0; i < friendData.lenght; i++){
//     var currentFriend = friendData[i]
//     totalDifferance = 0

//     console.log(currentFriend)
// }};
};