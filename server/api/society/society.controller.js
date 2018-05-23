/**
 * Created by imran on 27/01/2018.
 */
'use strict'
var Society = require('./society.model');
const logger = require('../../components/logger');
const TAG = 'api/society/society.controller.js';
const _ = require('lodash')

exports.index = function (req, res) {
  Society.find({university_id: req.params.id})
  .populate('university_id patron_id office_bearers created_by updated_by')
  .exec((err, societies) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: societies})
    }
  })
};

exports.addSociety = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'name')) parametersMissing = true
  if (!_.has(req.body, 'description')) parametersMissing = true
  if (!_.has(req.body, 'universityId')) parametersMissing = true
  if (!_.has(req.body, 'patronId')) parametersMissing = true
  if (!_.has(req.body, 'officeBearers')) parametersMissing = true
  if (!_.has(req.body, 'createdBy')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  const societyPayload = {
    name: req.body.name,
    description: req.body.description,
    university_id: req.body.universityId,
    patron_id: req.body.patron_id,
    office_bearers: req.body.officeBearers,
    created_by: req.body.createdBy
  }

  const societyData = new Society(universityPayload)
  societyData.save((err, createdRecord) => {
    if (err) {
      res.status(500).json({
        status: 'Failed',
        description: 'Failed to insert record'
      })
    } else {
      res.status(201).json({status: 'success', description: 'Society has been added successfully!'})
    }
  })
}

exports.updateSociety = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'name')) parametersMissing = true
  if (!_.has(req.body, 'description')) parametersMissing = true
  if (!_.has(req.body, 'universityId')) parametersMissing = true
  if (!_.has(req.body, 'patronId')) parametersMissing = true
  if (!_.has(req.body, 'officeBearers')) parametersMissing = true
  if (!_.has(req.body, 'updatedBy')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  Society.findById(req.body.societyId, (err, society) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    }
    if (!society) {
      return res.status(404)
        .json({status: 'failed', description: 'Record not found'})
    }

    society.name = req.body.name
    society.description = req.body.description
    society.patron_id = req.body.patronId
    society.office_bearers = req.body.officeBearers
    society.updated_by = req.body.updatedBy
    society.updated_at = Date.now()

    society.save((err, createdRecord) => {
      if (err) {
        res.status(500).json({
          status: 'Failed',
          description: 'Failed to insert record'
        })
      } else {
        res.status(201).json({status: 'success', description: 'Information has been updated successfully!'})
      }
    })
  })
}

exports.deleteSociety = function (req, res) {
  Society.deleteOne({_id: req.body.societyId}, (err, deleted) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    }
    res.status(201).json({status: 'success', description: 'Society has been deleted successfully!'})
  })
}
