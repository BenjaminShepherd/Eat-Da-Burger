// DEPENDENCIES
const mysql = require("mysql");
var connection;

// JAWSDB CONNECTION FOR HEROKU
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    // LOCAL CONNECTION
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db",
    });
}

connection.connect();

module.exports = connection;