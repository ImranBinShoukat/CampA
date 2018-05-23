'use strict'
let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const mypostSchema = new Schema({
  user_id: { type: ObjectId, ref: 'users' },
  post_id: { type: ObjectId, ref: 'posts' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('myposts', mypostSchema);
