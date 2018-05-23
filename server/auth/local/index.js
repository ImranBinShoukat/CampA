'use strict'

let express = require('express')
let passport = require('passport')
let auth = require('../auth.service')
let User = require('./../../api/user/Users.model.js')

let router = express.Router()

router.post('/', function (req, res, next) {
  User.findOne({
    username: req.body.username.toLowerCase()
  }, (err, user) => {
    if (err) {
      return res.status(501)
        .json({status: 'failed', description: 'Internal Server Error'})
    }
    if (!user) {
      return res.status(401).json({
        status: 'failed',
        description: 'No account found with this username.'
      })
    }

    passport.authenticate('local', function (err, user, info) {
      let error = err || info
      if (error){
        console.log('passport error', error)
        return res.status(401).json(error)
      }
      if (!user) {
        return res.status(404).json({status: 'failed', description: 'Something went wrong, please try again.'})
      }

      let token = auth.signToken(user._id)
      res.json({token: token, user: user})
      if (user.facebookInfo) {
        auth.fetchPages(`https://graph.facebook.com/v2.10/${
          user.facebookInfo.fbId}/accounts?access_token=${
          user.facebookInfo.fbToken}`, user)
      }
    })(req, res, next)
  })
})

module.exports = router
