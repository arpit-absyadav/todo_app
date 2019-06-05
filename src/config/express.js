var express = require('express');
var bodyParser = require('body-parser');
module.exports = function() {
  const app = express();

  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Credentials', false);
    res.setHeader('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(204);
    } else {
      next();
    }
  };
  app.use(allowCrossDomain);
  app.use(bodyParser.json());

  app.use(express.static('./app'));
  app.use(express.static('./config'));

  // ////////////////////////////////////////////////
  // ////////////////// App Routes///////////////////
  // ////////////////////////////////////////////////

  require('./../app/modules/todo/todo.routes')(app);

  // ////////////////////////////////////////////////
  // ///////////App default error handler////////////
  // ////////////////////////////////////////////////

  // 404
  app.use(function(req, res, next) {
    return res
      .status(404)
      .json('Requested Route [ ' + req.url + ' ] Not found.');
  });

  // 500 - Any server error
  app.use(function(err, req, res, next) {
    console.error(err);
    return res.status(500).json('Internal Server Error', err);
  });
  return app;
};
