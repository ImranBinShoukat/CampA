/**
 * Created by imran on 24/01/2018.
 */


// Production specific configuration
// ==================================
module.exports = {
  // MySQL connection options
  mongo: {
    uri:    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/campa-prod'
  },
  seedDB: false
};
