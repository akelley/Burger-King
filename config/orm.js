var connection = require("./connection.js");

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  create: function(tableInput, name, cb) {
    var queryString = "INSERT INTO " + tableInput + " (burger_name) VALUES ('" + name + "');";
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  
  update: function(table, id, cb) {
    var queryString = "UPDATE " + table + " SET devoured=true WHERE id=" + id + ";";
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};

module.exports = orm;
