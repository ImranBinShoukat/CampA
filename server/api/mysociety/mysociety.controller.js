/**
 * Created by imran on 27/01/2018.
 */

var MySociety = require('./mysociety.model');
const logger = require('../../components/logger');
const TAG = 'api/mysociety/mysociety.controller.js';
const _ = require('lodash')

exports.index = function (req, res) {
  MySociety.find({user_id: req.params.id})
  .populate('user_id society_id')
  .exec((err, mysocieties) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: mysocieties})
    }
  })
};

exports.addToMySociety = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'societyId')) parametersMissing = true
  if (!_.has(req.body, 'userId')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  const mySocietyPayload = {
    society_id: req.body.societyId,
    user_id: req.body.userId
  }

  const mySocietyData = new MySociety(mySocietyPayload)
  mySocietyData.save((err, createdRecord) => {
    if (err) {
      res.status(500).json({
        status: 'Failed',
        description: 'Failed to insert record'
      })
    } else {
      res.status(201).json({status: 'success', description: 'Society has been added to my society list!'})
    }
  })
}
