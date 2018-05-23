let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const studentSchema = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  gender: String,
  program: String,
  admission_semester: String,
  degree: String,
  email: String,
  contact: String,
  CNIC: String,
  profile_pic: String,
  university_id: { type: ObjectId, ref: 'universities' },
  datetime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('students', studentSchema);
