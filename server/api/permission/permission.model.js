let mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const permissionSchema = new Schema({
  user_id: { type: ObjectId, ref: 'users' },
  university_id: { type: ObjectId, ref: 'universities' },
  university_permission: { type: Boolean, default: false},
  student_permission: { type: Boolean, default: false},
  administrator_permission: { type: Boolean, default: false},
  society_permission: { type: Boolean, default: false},
  post_permission: { type: Boolean, default: false},
  event_permission: { type: Boolean, default: false},
  event_registration_permission: { type: Boolean, default: false},
  people_directory_permission: { type: Boolean, default: false},
  created_by: { type: ObjectId, ref: 'users' },
  updated_by: { type: ObjectId, ref: 'users' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
});

module.exports = mongoose.model('permissions', permissionSchema);
