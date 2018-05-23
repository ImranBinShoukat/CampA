/**
 * Created by imran on 27/01/2018.
 */

var Pages = require('./pages.model');
const logger = require('../../components/logger');
const TAG = 'api/pages/pages.controller.js';
const _ = require('lodash')

exports.index = function (req, res) {
  Pages.find({society_id: req.params.id})
  .populate('university_id society_id users_id')
  .exec((err, pages) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: pages})
    }
  })
};

exports.getConnectedPages = function (req, res) {
  Pages.find({society_id: req.params.id, connected: true})
  .populate('university_id society_id users_id')
  .exec((err, pages) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: pages})
    }
  })
};

exports.changeStatus = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'pageId')) parametersMissing = true
  if (!_.has(req.body, 'status')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  let connectValue = false

  if (status === 'connect') {
    connectValue = true
  } else {
    connectValue = false
  }

  Pages.update({_id: req.body.pageId}, {connected: connectValue})
  .exec((err, updated) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', description: `The page has been ${status}ed successfully!`})
    }
  })
};
