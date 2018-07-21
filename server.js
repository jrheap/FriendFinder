var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;

// 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    type: 'application/*+json'
}));

app.use(bodyParser.raw({
    type: 'application/vnd.custom-type'
}));

app.use(bodyParser.text({
    type: 'text/html'
}));
// console.log(require)

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
    console.log('I am listening')
});

//Try that.// still the sa
// Ok, haha i will and i will let you know
// try deleting your node_modules, package.json, and package - lock.json files completely and re - instaling.