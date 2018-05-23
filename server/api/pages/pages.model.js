'use strict'
let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const pagesSchema = new Schema({
  name: String,
  username: String,
  page_id: String,
  access_token: String,
  hashedPassword: String,
  likes: String,
  page_pic: String,
  connected: { type: Boolean, default: false },
  university_id: { type: ObjectId, ref: 'universities' },
  users_id: { type: ObjectId, ref: 'users' },
  society_id: { type: ObjectId, ref: 'societies' }
});

module.exports = mongoose.model('pages', pagesSchema);
