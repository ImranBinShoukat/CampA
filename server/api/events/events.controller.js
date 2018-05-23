/**
 * Created by imran on 27/01/2018.
 */

var Events = require('./events.model');
const logger = require('../../components/logger');
const TAG = 'api/events/events.controller.js';
const _ = require('lodash')

exports.index = function (req, res) {
  Events.find({university_id: req.params.id})
  .populate('society_id university_id created_by')
  .exec((err, events) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: events})
    }
  })
};

exports.addEvent = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'createdBy')) parametersMissing = true
  if (!_.has(req.body, 'universityId')) parametersMissing = true
  if (!_.has(req.body, 'societyId')) parametersMissing = true
  if (!_.has(req.body, 'name')) parametersMissing = true
  if (!_.has(req.body, 'description')) parametersMissing = true
  if (!_.has(req.body, 'type')) parametersMissing = true
  if (!_.has(req.body, 'isPublic')) parametersMissing = true
  if (!_.has(req.body, 'formType')) parametersMissing = true
  if (!_.has(req.body, 'eventDetails')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  const eventPayload = {
    created_by: req.body.createdBy,
    university_id: req.body.universityId,
    society_id: req.body.societyId,
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    is_public: req.body.isPublic,
    form_type: req.body.formType,
    event_details: req.body.eventDetails
  }

  const eventData = new Events(eventPayload)
  eventData.save((err, createdRecord) => {
    if (err) {
      res.status(500).json({
        status: 'Failed',
        description: 'Failed to insert record'
      })
    } else {
      res.status(201).json({status: 'success', description: 'Event has been added successfully!'})
    }
  })
}

exports.updateEvent = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'eventId')) parametersMissing = true
  if (!_.has(req.body, 'name')) parametersMissing = true
  if (!_.has(req.body, 'description')) parametersMissing = true
  if (!_.has(req.body, 'type')) parametersMissing = true
  if (!_.has(req.body, 'isPublic')) parametersMissing = true
  if (!_.has(req.body, 'formType')) parametersMissing = true
  if (!_.has(req.body, 'eventDetails')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  Events.findById(req.body.eventId, (err, event) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    }
    if (!event) {
      return res.status(404)
        .json({status: 'failed', description: 'Record not found'})
    }

    event.name = req.body.name
    event.description = req.body.description
    event.type = req.body.type
    event.is_public = req.body.isPublic
    event.form_type = req.body.formType
    event.event_details = req.body.eventDetails

    event.save((err2) => {
      if (err2) {
        return res.status(500)
          .json({status: 'failed', description: 'Event update failed'})
      }
      res.status(200).json({status: 'success', description: 'Information has been updated successfully!'})
    })
  })
}

exports.changeStatus = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'eventId')) parametersMissing = true
  if (!_.has(req.body, 'status')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  let publicValue = false

  if (status === 'public') {
    publicValue = true
  } else {
    publicValue = false
  }

  Events.update({_id: req.body.eventId}, {is_public: publicValue})
  .exec((err, updated) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', description: `The event status has been changed to ${status}.`})
    }
  })
};

exports.deleteEvent = function (req, res) {
  Events.deleteOne({_id: req.params.id}, (err, deleted) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    }
    res.status(201).json({status: 'success', description: 'Event has been deleted successfully!'})
  })
}
