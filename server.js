//dependencies
var express = require("express");

//create our PORT 
var PORT = process.env.PORT || 8000;

var app = express();
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))


app.listen(PORT, function () {
    console.log("Server is listening on PORT:" + PORT)
})
