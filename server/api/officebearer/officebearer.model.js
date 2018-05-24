let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const officebearerSchema = new Schema({
  user_id: { type: ObjectId, ref: 'users' },
  society_id: { type: ObjectId, ref: 'societies' },
  datetime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('officebearers', officebearerSchema);
