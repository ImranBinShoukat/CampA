'use strict'
let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const eventsSchema = new Schema({
  society_id: { type: ObjectId, ref: 'societies' },
  university_id: { type: ObjectId, ref: 'universities' },
  name: String,
  description: String,
  type: String,
  is_public: { type: Boolean, default: false },
  form_type: String,
  event_details: Schema.Types.Mixed,
  created_by: { type: ObjectId, ref: 'users' },
  datetime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('events', eventsSchema);
