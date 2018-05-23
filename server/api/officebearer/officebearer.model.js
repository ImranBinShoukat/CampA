let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const officebearerSchema = new Schema({
  student_id: { type: ObjectId, ref: 'students' },
  society_id: { type: ObjectId, ref: 'societies' },
  datetime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('officebearers', officebearerSchema);
