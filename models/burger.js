
// Import orm.js into burger.js
var orm = require("../config/orm.js");
// The code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    // Display all burgers in the db.
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // Add a new burger to the db.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    // Change the devoured status to true.
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    // Delete a burger from the db.
    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (res) {
            cb(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;


// var orm = require('../config/orm');

// var burger_call = {
//     insert: function (some_val, cb) {
//         orm.insertOne('burgers', 'burger_name, devoured', some_val, function (res) {
//             cb(res);
//         });
//     },
//     read: function (cb) {
//         orm.read('burgers', function (res) {
//             cb(res);
//         });
//     },
//     update: function (user_id, cb) {
//         orm.update('burgers', 'devoured', 1, 'id', user_id, function (res) {
//             cb(res);
//         });
//     },
//     delete: function (user_id, cb) {
//         orm.delete('burgers', 'id', user_id, function (res) {
//             cb(res);
//         });
//     }
// }

// module.exports = burger_call;