/**
 * Created by imran on 20/01/2018.
 */

/**
 * Main application routes
 */

'use strict';

var path = require('path');
var config = require('./config/environment/index');

const TAG = 'routes.js';

module.exports = function(app) {
  const env = app.get('env')

  app.use('/api/users', require('./api/user'));
  app.use('/api/universities', require('./api/university'));
  app.use('/api/societies', require('./api/society'));
  app.use('/api/mySocieties', require('./api/mysociety'));
  app.use('/api/pages', require('./api/pages'));
  app.use('/api/posts', require('./api/post'));
  app.use('/api/events', require('./api/events'));
  app.use('/api/eventregistrations', require('./api/eventregistration'));
  app.use('/api/people', require('./api/people'));

  app.use('/auth', require('./auth'));

  app.get('/', (req, res) => {
  // res.cookie('environment', config.env,
  //  {expires: new Date(Date.now() + 900000)})
  res.sendFile(path.join(config.root, 'client/index.html'))
  })

  app.route('/:url(api|auth)/*').get((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  }).post((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  })

  app.route('/*').get((req, res) => {
    res.redirect('/')
  }).post((req, res) => {
    res.redirect('/')
  })
};
