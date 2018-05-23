/**
 * Created by imran on 20/01/2018.
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // production

var Users = require('./api/user/Users.model');
var express = require('express'),
  app = express(),
  path = require('path'),
  config = require('./config/environment/index'),
  logger = require('./components/logger'),
  mongoose = require('mongoose');

const TAG = 'app.js';

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

require('./config/express')(app);
require('./routes')(app);

app.listen(config.port);

logger.serverLog(TAG, 'CampA server STARTED on ' + config.port + ' in ' + config.env + ' mode');

if (config.env === 'production') {
  console.log('CampA server STARTED on %s in %s mode', config.port, config.env);
}
