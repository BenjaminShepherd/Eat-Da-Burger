
// Import (require) connection.js
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
    // Display all burgers in the db.
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Add a burger to the db.
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        console.log(vals);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },


    // Set burger devoured status to true.
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },
    // Delete a burger from the db.
    deleteOne: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    }
};

// Export the ORM object in module.exports.
module.exports = orm;

// DEPENDENCIES
// const connection = require("../config/connection.js");

// // Match the query question marks
// function printQuestionMarks(num) {
//     var arr = [];
//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }
//     return arr.toString();
// }

// // make it valid sql
// function objToSql(obj) {
//     var arr = [];

//     for (var key in obj) {
//         var value = obj[key];

//         if (Object.hasOwnProperty.call(obj, key)) {
//             if (typeof value === "string" && value.indexOf(" ") >= 0) {
//                 value = "'" + value + "'";
//             }
//             arr.push(key + "=" + value);
//         }
//     }
//     return arr.toString();
// }

// // 
// const orm = {
//     all: function (table, callback) {
//         let sql = "SELECT * FROM " + table + ";"
//         connection.query(sql, function (err, result) {
//             if (err) throw err;
//             callback(result);
//         });
//     },
//     create: function (table, cols, vals, callback) {
//         let sql = "INSERT INTO " + table;
//         sql += " (";
//         sql += cols.toString();
//         sql += ") ";
//         sql += "VALUES (";
//         sql += printQuestionMarks(vals.length);
//         sql += ") "

//         console.log(sql);

//         connection.query(sql, vals, function (err, result) {
//             if (err) throw err;
//             callback(result);
//         });
//     },
//     update: function (table, colValue, condition, callback) {
//         console.log(table);
//         console.log(colValue);

//         var sql = "UPDATE " + table;
//         sql += " SET ";
//         sql += objToSql(colValue)
//         sql += " WHERE ";
//         sql += condition;

//         console.log(sql);

//         connection.query(sql, function (err, result) {
//             if (err) throw err;
//             callback(result);
//         });
//     },
//     delete: function (table, condition, callback) {
//         let sql = "DELETE FROM " + table;
//         sql += " WHERE ";
//         sql += condition

//         console.log(sql);

//         connection.query(sql, function (err, result) {
//             if (err) throw err;
//             callback(result);
//         });
//     }
// }

// module.exports = orm;