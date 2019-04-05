const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskTypeSchema = new Schema({
  _id: { type: String },
  name: { type: String },
  days: { type: Number }
});

module.exports = mongoose.model('TaskType', taskTypeSchema);
