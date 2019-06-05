var mongoose = require('mongoose');
var config = require('./../env/config');

module.exports = function() {
  var databaseConnection = mongoose.connect(
    config.db_connectionString.flex,
    { useNewUrlParser: true, useCreateIndex: true },
    function(err) {
      if (!err) {
        console.log(
          'Mongoose default connection open to ' +
            config.db_connectionString.flex
        );
      } else {
        console.log('Mongoose default connection error: ' + err);
      }
    }
  );

  require('./../../app/modules/todo/todo.model');
  // schemas
  return databaseConnection;
};
