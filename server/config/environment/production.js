/**
 * Created by imran on 24/01/2018.
 */


// Production specific configuration
// ==================================
module.exports = {
  // MySQL connection options
  mongo: {
    uri:    process.env.MONGO_URI ||
    'mongodb://root:a345rq98efw@localhost/campa'
  },
  seedDB: false
};
