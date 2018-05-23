/**
 * Created by imran on 20/01/2018.
 */

const path = require('path');
const _ = require('lodash');

var all = {

  env: process.env.NODE_ENV,

  // Project root path
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 3000,

  // Secure Server port
  secure_port: process.env.SECURE_PORT || 8443,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: process.env.SESSION_SECRET || 'f83b0cd6ccb20142185616dsf54dsf4'
  },

  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  facebook: {
    clientID:     process.env.FACEBOOK_ID || '456637644436523',
    clientSecret: process.env.FACEBOOK_SECRET || 'f46495b908b408bc8e4f5b259b18e952',
    callbackURL:  (process.env.DOMAIN || 'http://www.kibopush.com') + '/auth/facebook/callback'
  }
};

module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});
