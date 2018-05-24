/**
 * Created by imran on 27/01/2018.
 */

var Post = require('./post.model');
var MySociety = require('../mysociety/mysociety.model');
const logger = require('../../components/logger');
const TAG = 'api/post/post.controller.js';
const _ = require('lodash')
const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const FCM = require('fcm-node')

exports.index = function (req, res) {
  Post.find({society_id: req.params.id})
  .populate('university_id society_id page_id event_id created_by')
  .exec((err, posts) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      res.status(201).json({status: 'success', payload: posts})
    }
  })
};

exports.createPost = function (req, res) {
  let parametersMissing = false

  if (!_.has(req.body, 'payload')) parametersMissing = true
  if (!_.has(req.body, 'createdBy')) parametersMissing = true

  if (parametersMissing) {
    return res.status(400)
    .json({status: 'failed', description: 'Parameters are missing'})
  }

  const postPayload = {
    payload: req.body.payload,
    created_by: req.body.createdBy
  }

  const postData = new Post(postPayload)
  postData.save((err, createdRecord) => {
    if (err) {
      res.status(500).json({
        status: 'Failed',
        description: 'Failed to insert record'
      })
    } else {
      const serverKey = 'AAAAgPwDjg4:APA91bElsHRVXY0LwQJpzp0HPE8sWkyUaJaoKREIlr4FpcnRengXjze2ZxpKPnxUlikulU_3kUART_jyLVZ8W5Qc30WlWQtkb_MxeSPxnlfZAUfa_hQRIzrfn0JpRmrIggJEPFTfy5uS'
      var fcm = new FCM(serverKey)
      let pushData = {
        to: 'xU2Shdy2l4:APA91bEfRhitq2Lo_8h9H50jvfgSng3rqFM-6CSv62UfQJKF_cBoU_uok88Ncv3kJlg9c_c9JI5vwsFg2M-FSFERkd6cA7-XD-sF5E5x7C8bEBPTd-Muz2XQD2oV2SmTFdy-CBjqcWsi',
        notification: {
          title: req.body.payload.title,
          body: req.body.payload.body
        }
      }
      fcm.send(pushData, (error, response) => {
        if (error) {
          console.log('Failed to send the push notification')
        } else {
          console.log('Push notification sent successfully!')
        }
      })
      res.status(201).json({status: 'success', description: 'Post has been created successfully!'})
    }
  })
}

exports.getMyPosts = function (req, res) {
  MySociety.find({user_id: req.params.id})
  .exec((err, mySocieties) => {
    if (err) {
      return res.status(500)
        .json({status: 'failed', description: 'Internal Server Error'})
    } else {
      let societies = []
      for (let i = 0; i < mySocieties.length; i++) {
        societies.push(mySocieties[i].society_id)
      }

      Post.find({society_id: {$in: societies}})
      .exec((err, posts) => {
        if (err) {
          return res.status(500)
            .json({status: 'failed', description: 'Internal Server Error'})
        } else {
          res.status(201).json({status: 'success', payload: posts})
        }
      })
    }
  })
};

exports.upload = function (req, res) {
  var today = new Date()
  var uid = crypto.randomBytes(5).toString('hex')
  var serverPath = 'f' + uid + '' + today.getFullYear() + '' +
    (today.getMonth() + 1) + '' + today.getDate()
  serverPath += '' + today.getHours() + '' + today.getMinutes() + '' +
    today.getSeconds()
  let fext = req.files.file.name.split('.')
  serverPath += '.' + fext[fext.length - 1].toLowerCase()

  let dir = path.resolve(__dirname, '../../../files/')

  if (req.files.file.size === 0) {
    return res.status(400).json({
      status: 'failed',
      description: 'No file submitted'
    })
  }

  fs.rename(
    req.files.file.path,
    dir + '/userfiles/' + serverPath,
    err => {
      if (err) {
        console.log(err)
        return res.status(500).json({
          status: 'failed',
          description: 'internal server error' + err
        })
      }
      logger.serverLog(TAG,
        `file uploaded, sending response now: ${JSON.stringify({
          id: serverPath,
          url: `${config.domain}/api/post/download/${serverPath}`
        })}`)
      return res.status(201).json({
        status: 'success',
        payload: {
          id: serverPath,
          url: `${config.domain}/api/post/download/${serverPath}`
        }
      })
    }
  )
}
