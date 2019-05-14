//dependencies
var express = require("express");
var exphbs = require("express-handlebars")

//create our PORT 
var PORT = process.env.PORT || 8000;

var app = express();
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))

var routes = require('../Eat-Da-Burger/controllers/burger')

app.use(routes)

app.listen(PORT, function () {
    console.log("Server is listening on PORT:" + PORT)
})
