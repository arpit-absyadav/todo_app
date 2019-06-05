const https = require('https');
const fs = require('fs');
const config = require('./src/config/env/config');
const express = require('./src/config/express');
const mongoose = require('./src/config/database/mongoose');

const database = mongoose();
var app = express();

app.listen(process.env.PORT || config.port, function() {
  console.log('----------------------------------------------------------');
  console.log('Server listening at port : ' + config.port);
  console.log('Time : ' + new Date());
  console.log('----------------------------------------------------------');
});

module.exports = app;
