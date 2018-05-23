'use strict'
let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const peopleSchema = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  designation: String,
  gender: String,
  department: String,
  office_hours: Schema.Types.Mixed,
  office_location: String,
  email: String,
  contact: String,
  ext: String,
  CNIC: String,
  profile_pic: String,
  university_id: { type: ObjectId, ref: 'universities' },
  datetime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('people', peopleSchema);
