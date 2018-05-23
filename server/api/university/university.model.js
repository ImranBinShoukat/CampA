'use strict'

let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const universitySchema = new Schema({
  name: String,
  address: String,
  sector: String,
  logo_url: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
});

module.exports = mongoose.model('universities', universitySchema);
