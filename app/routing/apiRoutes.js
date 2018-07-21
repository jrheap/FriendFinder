// Inside this file i need to create a function maybe two that will compare the scores of the friends object and
// let the user know who he/she is most capibilty 
var friends = ("../data/friends.js")

var express = require("express");

var app = express();

module.exports = function (app) {
    // GET gets data from somewhere else
    app.get("/api/friends", function (req, res) {

        res.json(friends);
        // console.log(friends);
        
    })
};
// post takes the user input and creates data
app.post("api/friends", function(res,res){

var bestFriend = [{
    name: "",
    photo: "",
    friendDiffernce: 100,
    

}]

})