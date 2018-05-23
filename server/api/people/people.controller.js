/**
 * Created by imran on 27/01/2018.
 */
'use strict'
var People = require('./people.model');
const logger = require('../../components/logger');
const TAG = 'api/people/people.controller.js';
const _ = require('lodash')

exports.index = function (req, res) {
  People.find({university_id: req.params.id})
  .populate('university_id')
  .exec((err, people) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: people})
    }
  })
};

exports.update = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'peopleId')) parametersMissing = true
  if (!_.has(req.body, 'firstName')) parametersMissing = true
  if (!_.has(req.body, 'lastName')) parametersMissing = true
  if (!_.has(req.body, 'designation')) parametersMissing = true
  if (!_.has(req.body, 'gender')) parametersMissing = true
  if (!_.has(req.body, 'department')) parametersMissing = true
  if (!_.has(req.body, 'officeHours')) parametersMissing = true
  if (!_.has(req.body, 'officeLocation')) parametersMissing = true
  if (!_.has(req.body, 'email')) parametersMissing = true
  if (!_.has(req.body, 'contact')) parametersMissing = true
  if (!_.has(req.body, 'ext')) parametersMissing = true
  if (!_.has(req.body, 'CNIC')) parametersMissing = true
  if (!_.has(req.body, 'profilePic')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  People.findById(req.body.peopleId, (err, people) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    }
    if (!people) {
      return res.status(404)
        .json({status: 'failed', description: 'Record not found'})
    }

    people.first_name = req.body.firstName
    people.last_name = req.body.lastName
    people.designation = req.body.designation
    people.gender = req.body.gender
    people.department = req.body.department
    people.office_hours = req.body.officeHours
    people.office_location = req.body.officeLocation
    people.email = req.body.email
    people.contact = req.body.contact
    people.ext = req.body.ext
    people.CNIC = req.body.CNIC
    people.profile_pic = req.body.profilePic

    people.save((err2) => {
      if (err2) {
        return res.status(500)
          .json({status: 'failed', description: 'University update failed'})
      }
      res.status(200).json({status: 'success', description: 'Information has been updated successfully!'})
    })
  })
}
