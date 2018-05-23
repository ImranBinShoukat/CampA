/**
 * Created by imran on 27/01/2018.
 */
'use strict'
var EventRegistrations = require('./eventregistrations.model');
const logger = require('../../components/logger');
const TAG = 'api/eventregistration/eventregistration.controller.js';
const _ = require('lodash')

exports.getMyEvents = function (req, res) {
  EventRegistrations.find({user_id: req.params.id})
  .populate('user_id society_id university_id event_id')
  .exec((err, events) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: events})
    }
  })
};

exports.index = function (req, res) {
  EventRegistrations.find({event_id: req.params.id})
  .populate('user_id society_id university_id event_id')
  .exec((err, registrations) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: registrations})
    }
  })
};

exports.registerEvent = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'userId')) parametersMissing = true
  if (!_.has(req.body, 'societyId')) parametersMissing = true
  if (!_.has(req.body, 'universityId')) parametersMissing = true
  if (!_.has(req.body, 'eventId')) parametersMissing = true
  if (!_.has(req.body, 'paymentStatus')) parametersMissing = true
  if (!_.has(req.body, 'paymentDetails')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  const registrationPayload = {
    user_id: req.body.userId,
    society_id: req.body.societyId,
    university_id: req.body.universityId,
    event_id: req.body.eventId,
    payment_status: req.body.payment_status,
    payment_details: req.body.paymentDetails
  }

  const registrationData = new EventRegistrations(registrationPayload)
  registrationData.save((err, createdRecord) => {
    if (err) {
      res.status(500).json({
        status: 'Failed',
        description: 'Failed to insert record'
      })
    } else {
      res.status(201).json({status: 'success', description: 'You have been registered to this event successfully!'})
    }
  })
}

exports.cancelRegistration = function (req, res) {
  EventRegistrations.deleteOne({_id: req.body.registrationId}, (err, deleted) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    }
    res.status(201).json({status: 'success', description: 'Registration has been cancelled successfully!'})
  })
}
