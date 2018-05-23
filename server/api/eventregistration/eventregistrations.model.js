'use strict'
let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const eventregistrationSchema = new Schema({
  user_id: { type: ObjectId, ref: 'users' },
  society_id: { type: ObjectId, ref: 'societies' },
  university_id: { type: ObjectId, ref: 'universities' },
  event_id: { type: ObjectId, ref: 'events' },
  payment_status: { type: Boolean, default: false },
  payment_details: Schema.Types.Mixed,
  datetime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('eventregistrations', eventregistrationSchema);
