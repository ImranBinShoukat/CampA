let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const followerSchema = new Schema({
  student_id: { type: ObjectId, ref: 'people' },
  faculty_id: { type: ObjectId, ref: 'students' },
  user_id: { type: ObjectId, ref: 'users' },
  society_id: { type: ObjectId, ref: 'societies' },
  is_subscribed: { type: Boolean, default: true },
  datetime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('followers', followerSchema);
