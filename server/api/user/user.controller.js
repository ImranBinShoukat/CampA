/**
 * Created by imran on 27/01/2018.
 */

var User = require('./Users.model');
var Student = require('../students/students.model');
var People = require('../people/people.model');
var VerificationToken = require('../verificationtoken/verificationtoken.model');
const logger = require('../../components/logger');
const TAG = 'api/user/user.controller.js';
const _ = require('lodash')
let crypto = require('crypto')

exports.index = function (req, res) {
  User.find({}).populate('student_id people_id university_id created_by updated_by')
  .exec((err, users) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: users})
    }
  })
}

exports.getOneUser = function (req, res) {
  User.findOne({_id: req.user._id}).populate('student_id people_id university_id created_by updated_by')
  .exec((err, user) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: user})
    }
  })
}

exports.updateUser = function (req, res) {
  let parametersMissing = false

  if (req.body.role && req.body.role === 'student') {
    if (!_.has(req.body, 'firstName')) parametersMissing = true
    if (!_.has(req.body, 'lastName')) parametersMissing = true
    if (!_.has(req.body, 'username')) parametersMissing = true
    if (!_.has(req.body, 'program')) parametersMissing = true
    if (!_.has(req.body, 'gender')) parametersMissing = true
    if (!_.has(req.body, 'admissionSemester')) parametersMissing = true
    if (!_.has(req.body, 'degree')) parametersMissing = true
    if (!_.has(req.body, 'email')) parametersMissing = true
    if (!_.has(req.body, 'contact')) parametersMissing = true
    if (!_.has(req.body, 'CNIC')) parametersMissing = true
    if (!_.has(req.body, 'profilePic')) parametersMissing = true
    if (!_.has(req.body, 'updatedBy')) parametersMissing = true

    if (parametersMissing) {
      return res.status(400)
      .json({status: 'failed', description: 'Parameters are missing'})
    }

    Student.findOne({username: req.body.username}, (err, student) => {
      if (err) {
        return res.status(500)
          .json({status: 'failed', description: 'Internal Server Error'})
      }
      if (!student) {
        return res.status(404)
          .json({status: 'failed', description: 'Record not found'})
      }

      student.first_name = req.body.first_name
      student.last_name = req.body.lastName
      student.username = req.body.username
      student.gender = req.body.gender
      student.program = req.body.program
      student.admission_semester = req.body.admissionSemester
      student.degree = req.body.degree
      student.email = req.body.email
      student.contact = req.body.contact
      student.CNIC = req.body.CNIC
      student.profile_pic = req.body.profilePic

      studentData.save((err, savedStudent) => {
        if (err) {
          res.status(500).json({
            status: 'Failed',
            description: 'Failed to insert record'
          })
        }
        User.findOne({_id: req.body.userId}, (err, user) => {
          if (err) {
            return res.status(500)
              .json({status: 'failed', description: 'Internal Server Error'})
          }
          if (!user) {
            return res.status(404)
              .json({status: 'failed', description: 'Record not found'})
          }

          user.username = req.body.username
          user.role = req.body.role
          user.updated_by = req.body.updatedBy
          user.updated_at = Date.now()

          user.save((err, savedUser) => {
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
      })
    })
  } else {
    if (!_.has(req.body, 'role')) parametersMissing = true
    if (!_.has(req.body, 'firstName')) parametersMissing = true
    if (!_.has(req.body, 'lastName')) parametersMissing = true
    if (!_.has(req.body, 'username')) parametersMissing = true
    if (!_.has(req.body, 'designation')) parametersMissing = true
    if (!_.has(req.body, 'department')) parametersMissing = true
    if (!_.has(req.body, 'gender')) parametersMissing = true
    if (!_.has(req.body, 'email')) parametersMissing = true
    if (!_.has(req.body, 'contact')) parametersMissing = true
    if (!_.has(req.body, 'ext')) parametersMissing = true
    if (!_.has(req.body, 'officeHours')) parametersMissing = true
    if (!_.has(req.body, 'officeLocation')) parametersMissing = true
    if (!_.has(req.body, 'CNIC')) parametersMissing = true
    if (!_.has(req.body, 'profilePic')) parametersMissing = true
    if (!_.has(req.body, 'updatedBy')) parametersMissing = true

    if (parametersMissing) {
      return res.status(400)
      .json({status: 'failed', description: 'Parameters are missing'})
    }

    People.findOne({username: req.body.username}, (err, people) => {
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
      people.username = req.body.username
      people.designation = req.body.designation
      people.gender = req.body.gender
      people.department = req.body.department
      people.office_hours = req.body.office_hours
      people.office_location = req.body.office_location
      people.email = req.body.email
      people.contact = req.body.contact
      people.ext = req.body.ext
      people.CNIC = req.body.CNIC
      people.profile_pic = req.body.profilePic

      people.save((err, savedPeople) => {
        if (err) {
          res.status(500).json({
            status: 'Failed',
            description: 'Failed to insert record'
          })
        }

        User.findOne({_id: req.body.userId}, (err, user) => {
          if (err) {
            return res.status(500)
              .json({status: 'failed', description: 'Internal Server Error'})
          }
          if (!user) {
            return res.status(404)
              .json({status: 'failed', description: 'Record not found'})
          }

          user.username = req.body.username
          user.role = req.body.role
          user.updated_by = req.body.updatedBy
          user.updated_at = Date.now()

          user.save((err, savedUser) => {
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
      })
    })
  }
}

exports.addUser = function (req, res) {
  let parametersMissing = false

  if (req.body.role && req.body.role === 'student') {
    if (!_.has(req.body, 'firstName')) parametersMissing = true
    if (!_.has(req.body, 'lastName')) parametersMissing = true
    if (!_.has(req.body, 'username')) parametersMissing = true
    if (!_.has(req.body, 'password')) parametersMissing = true
    if (!_.has(req.body, 'universityId')) parametersMissing = true
    if (!_.has(req.body, 'program')) parametersMissing = true
    if (!_.has(req.body, 'gender')) parametersMissing = true
    if (!_.has(req.body, 'admissionSemester')) parametersMissing = true
    if (!_.has(req.body, 'degree')) parametersMissing = true
    if (!_.has(req.body, 'email')) parametersMissing = true
    if (!_.has(req.body, 'contact')) parametersMissing = true
    if (!_.has(req.body, 'CNIC')) parametersMissing = true
    if (!_.has(req.body, 'profilePic')) parametersMissing = true
    if (!_.has(req.body, 'createdBy')) parametersMissing = true

    if (parametersMissing) {
      return res.status(400)
      .json({status: 'failed', description: 'Parameters are missing'})
    }

    User.findOne({username: req.body.username}, (err, usernameUsed) => {
      if (err) {
        return res.status(500)
          .json({status: 'failed', description: 'Internal Server Error'})
      }
      if (usernameUsed) {
        return res.status(422)
          .json({status: 'failed', description: 'Given username is already in use.'})
      }

      const studentPayload = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        username: req.body.username,
        gender: req.body.gender,
        program: req.body.program,
        admission_semester: req.body.admissionSemester,
        degree: req.body.degree,
        email: req.body.email,
        contact: req.body.contact,
        CNIC: req.body.CNIC,
        profile_pic: req.body.profilePic,
        university_id: req.body.universityId
      }

      const studentData = new Student(studentPayload)
      studentData.save((err, savedStudent) => {
        if (err) {
          console.log(err)
          res.status(500).json({
            status: 'Failed',
            description: 'Failed to insert record'
          })
        }
        const userPayload = {
          student_id: savedStudent._id,
          university_id: req.body.universityId,
          username: req.body.username,
          role: req.body.role,
          password: req.body.password,
          created_by: req.body.created_by
        }
        const userData = new User(userPayload)
        userData.save((err, savedUser) => {
          if (err) {
            res.status(500).json({
              status: 'Failed',
              description: 'Failed to insert record'
            })
          } else {
            var today = new Date()
            var uid = crypto.randomBytes(5).toString('hex')
            let tokenString = 'f' + uid + '' + today.getFullYear() + '' +
              (today.getMonth() + 1) + '' + today.getDate() + '' +
              today.getHours() + '' + today.getMinutes() + '' +
              today.getSeconds()

            let newToken = new VerificationToken({
              userId: user._id,
              token: tokenString
            })

            newToken.save(function (err) {
              if (err) {
                logger.serverLog(TAG, `New Token save : ${JSON.stringify(
                  err)}`)
              } else {
                res.status(201).json({status: 'success', description: 'User has been created successfully!'})
              }
            })
          }
        })
      })
    })
  } else {
    if (!_.has(req.body, 'role')) parametersMissing = true
    if (!_.has(req.body, 'firstName')) parametersMissing = true
    if (!_.has(req.body, 'lastName')) parametersMissing = true
    if (!_.has(req.body, 'username')) parametersMissing = true
    if (!_.has(req.body, 'password')) parametersMissing = true
    if (!_.has(req.body, 'universityId')) parametersMissing = true
    if (!_.has(req.body, 'designation')) parametersMissing = true
    if (!_.has(req.body, 'department')) parametersMissing = true
    if (!_.has(req.body, 'gender')) parametersMissing = true
    if (!_.has(req.body, 'email')) parametersMissing = true
    if (!_.has(req.body, 'contact')) parametersMissing = true
    if (!_.has(req.body, 'ext')) parametersMissing = true
    if (!_.has(req.body, 'officeHours')) parametersMissing = true
    if (!_.has(req.body, 'officeLocation')) parametersMissing = true
    if (!_.has(req.body, 'CNIC')) parametersMissing = true
    if (!_.has(req.body, 'profilePic')) parametersMissing = true
    if (!_.has(req.body, 'createdBy')) parametersMissing = true

    if (parametersMissing) {
      return res.status(400)
      .json({status: 'failed', description: 'Parameters are missing'})
    }

    User.findOne({username: req.body.username}, (err, usernameUsed) => {
      if (err) {
        return res.status(500)
          .json({status: 'failed', description: 'Internal Server Error'})
      }
      if (usernameUsed) {
        return res.status(422)
          .json({status: 'failed', description: 'Given username is already in use.'})
      }

      const peoplePayload = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        username: req.body.username,
        designation: req.body.designation,
        gender: req.body.gender,
        department: req.body.department,
        office_hours: req.body.offiecHours,
        office_location: req.body.office_location,
        email: req.body.email,
        contact: req.body.contact,
        ext: req.body.ext,
        CNIC: req.body.CNIC,
        profile_pic: req.body.profilePic,
        university_id: req.body.universityId
      }

      const peopleData = new People(peoplePayload)
      peopleData.save((err, savedPeople) => {
        if (err) {
          res.status(500).json({
            status: 'Failed',
            description: 'Failed to insert record'
          })
        }
        console.log('savedPeople', savedPeople)
        const userPayload = {
          people_id: savedPeople._id,
          university_id: req.body.universityId,
          username: req.body.username,
          role: req.body.role,
          password: req.body.password,
          created_by: req.body.created_by
        }
        const userData = new User(userPayload)
        userData.save((err, savedUser) => {
          if (err) {
            console.log('error', err)
            res.status(500).json({
              status: 'Failed',
              description: 'Failed to insert record'
            })
          } else {
            var today = new Date()
            var uid = crypto.randomBytes(5).toString('hex')
            let tokenString = 'f' + uid + '' + today.getFullYear() + '' +
              (today.getMonth() + 1) + '' + today.getDate() + '' +
              today.getHours() + '' + today.getMinutes() + '' +
              today.getSeconds()

            let newToken = new VerificationToken({
              userId: savedUser._id,
              token: tokenString
            })

            newToken.save(function (err) {
              if (err) {
                logger.serverLog(TAG, `New Token save : ${JSON.stringify(
                  err)}`)
              } else {
                res.status(201).json({status: 'success', description: 'User has been created successfully!'})
              }
            })
          }
        })
      })
    })
  }
}

exports.deleteUser = function (req, res) {
  User.findOne({_id: req.body.userId}, (err, user) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    }
    const ROLE = user.role

    User.deleteOne({_id: req.body.userId}, (err, deletedUser) => {
      if (err) {
        return res.status(500)
          .json({status: 'failed', description: 'Internal Server Error'})
      }

      if (ROLE === 'student') {
        Student.deleteOne({_id: user.student_id}, (err, deleted) => {
          if (err) {
            return res.status(500)
              .json({status: 'failed', description: 'Internal Server Error'})
          }
          res.status(201).json({status: 'success', description: 'User has been deleted successfully!'})
        })
      } else {
        People.deleteOne({_id: user.people_id}, (err, deleted) => {
          if (err) {
            return res.status(500)
              .json({status: 'failed', description: 'Internal Server Error'})
          }
          res.status(201).json({status: 'success', description: 'User has been deleted successfully!'})
        })
      }
    })
  })
}

exports.makeOfficeBearer = function (req, res) {
  User.update({_id: req.body.userId}, {is_office_bearer: true})
  .exec((err, updated) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', description: 'User has been made the office bearer successfully!'})
    }
  })
}

exports.changePic = function (req, res) {
  User.findOne({_id: req.body.userId})
  .exec((err, user) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      if (user.student_id) {
        Student.update({_id: user.student_id}, {profile_pic: req.body.profilePic})
        .exec((err, updated) => {
          if (err) {
            return res.status(500)
              .json({status: 'failed', description: 'Internal Server Error'})
          } else {
            res.status(201).json({status: 'success', description: 'Profile picture has been updated successfully!'})
          }
        })
      } else {
        People.update({_id: user.people_id}, {profile_pic: req.body.profilePic})
        .exec((err, updated) => {
          if (err) {
            return res.status(500)
              .json({status: 'failed', description: 'Internal Server Error'})
          } else {
            res.status(201).json({status: 'success', description: 'Profile picture has been updated successfully!'})
          }
        })
      }
    }
  })
}

exports.checkUsername = function (req, res) {
  User.findOne({username: req.body.username})
  .exec((err, user) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else if (user) {
      res.status(201).json({status: 'success', description: 'A user already exists with this username!'})
    } else {
      res.status(201).json({status: 'success', description: 'Username is new.'})
    }
  })
}
