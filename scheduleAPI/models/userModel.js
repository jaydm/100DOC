const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String },
  roleID: { type: Number },
  active: { type: Boolean }
});

module.exports = mongoose.model('User', userSchema);
