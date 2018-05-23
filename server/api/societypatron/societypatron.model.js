'use strict'
let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const societypatronSchema = new Schema({
  people_id: { type: ObjectId, ref: 'people' },
  society_id: { type: ObjectId, ref: 'societies' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
});

module.exports = mongoose.model('societypatrons', societypatronSchema);
