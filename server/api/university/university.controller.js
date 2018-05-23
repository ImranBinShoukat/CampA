/**
 * Created by imran on 27/01/2018.
 */

var University = require('./university.model');
const logger = require('../../components/logger');
const TAG = 'api/university/university.controller.js';
const _ = require('lodash')

exports.index = function (req, res) {
  University.find({}, (err, universities) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: universities})
    }
  })
};

exports.getOneUniversity = function (req, res) {
  University.findOne({_id: req.params.id}, (err, university) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: university})
    }
  })
}

exports.addUniveristy = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'name')) parametersMissing = true
  if (!_.has(req.body, 'address')) parametersMissing = true
  if (!_.has(req.body, 'sector')) parametersMissing = true
  if (!_.has(req.body, 'logoUrl')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  const universityPayload = {
    name: req.body.name,
    address: req.body.address,
    sector: req.body.sector,
    logo_url: req.body.logoUrl
  }

  const universityData = new University(universityPayload)
  universityData.save((err, createdRecord) => {
    if (err) {
      res.status(500).json({
        status: 'Failed',
        description: 'Failed to insert record'
      })
    } else {
      res.status(201).json({status: 'success', description: 'Univeristy has been added successfully!'})
    }
  })
}

exports.updateUniveristy = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'name')) parametersMissing = true
  if (!_.has(req.body, 'address')) parametersMissing = true
  if (!_.has(req.body, 'sector')) parametersMissing = true
  if (!_.has(req.body, 'logoUrl')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  University.findById(req.body.universityId, (err, university) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    }
    if (!university) {
      return res.status(404)
        .json({status: 'failed', description: 'Record not found'})
    }

    autoposting.name = req.body.name
    autoposting.address = req.body.address
    autoposting.sector = req.body.sector
    autoposting.logo_url = req.body.logo_url
    autoposting.updated_at = Date.now()
    university.save((err2) => {
      if (err2) {
        return res.status(500)
          .json({status: 'failed', description: 'University update failed'})
      }
      res.status(200).json({status: 'success', description: 'Information has been updated successfully!'})
    })
  })
}

exports.deleteUniveristy = function (req, res) {
  University.deleteOne({_id: req.body.universityId}, (err, deleted) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    }
    res.status(201).json({status: 'success', description: 'University has been deleted successfully!'})
  })
}
