const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectModel = new Schema({
  _id: { type: String },
  name: { type: String },
  created: { type: Date }
});

module.exports = mongoose.model('Project', projectModel);
