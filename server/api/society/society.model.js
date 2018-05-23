'use strict'
let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const societySchema = new Schema({
  university_id: { type: ObjectId, ref: 'universities' },
  name: String,
  description: String,
  patron_id: { type: ObjectId, ref: 'societypatrons'},
  office_bearers: [{ type: ObjectId, ref: 'users' }],
  created_by: { type: ObjectId, ref: 'users' },
  updated_by: { type: ObjectId, ref: 'users' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
});

module.exports = mongoose.model('societies', societySchema);
