// Inside this file i need to create a function maybe two that will compare the scores of the friends object and
// let the user know who he/she is most capibilty 
var friendData = ("../data/friends.js")

var express = require("express");

var app = express();

module.exports = function (app) {
    // GET gets data from somewhere else
    
    app.post("api/friends", function(req,res){
        // post takes the user input and creates data
        console.log(friendData)
        res.json(friendData);
        console.log('couldnt think of anything')
        
        // This stores the user input into the data
        
        
        var userData = req.body
        var userScore = userData.score;
        
        var totalDifferance 
    });
// create for a foor loop that will run throuhg all the 
// for(var i = 0; i < friendData.lenght; i++){
//     var currentFriend = friendData[i]
//     totalDifferance = 0

//     console.log(currentFriend)
// }};
};