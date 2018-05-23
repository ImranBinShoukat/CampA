'use strict'
let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const postSchema = new Schema({
  society_id: { type: ObjectId, ref: 'societies' },
  page_id: { type: ObjectId, ref: 'pages' },
  university_id: { type: ObjectId, ref: 'universities' },
  payload: Schema.Types.Mixed,
  event_id: { type: ObjectId, ref: 'events'},
  created_by: { type: ObjectId, ref: 'users' }
});

module.exports = mongoose.model('posts', postSchema);
