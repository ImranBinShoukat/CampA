/**
 * Created by imran on 24/071/2018.
 */
'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/campa-dev'
  },
  seedDB: false
};
