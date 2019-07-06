//dependencies
var express = require("express");
var exphbs = require("express-handlebars")

//create our PORT 
var PORT = process.env.PORT || 8000;

var app = express();
// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }))
// app.set('views', __dirname + '/views'); // general config
// app.set('view engine');
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//app.set('views', __dirname + '/views')


var routes = require('./controllers/controllers')

app.use(routes)

app.listen(PORT, function () {
    console.log("Server is listening on PORT:" + PORT)
})
