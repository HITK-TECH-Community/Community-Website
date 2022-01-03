const mongoose = require('mongoose');

const { Schema } = mongoose;

const joinUs = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  linkdin: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  year: {
    type: String,
    trim: true,
    required: true,
  },
  college: {
    type: String,
    trim: true,
    required: true,
  },
  contact: {
    type: String,
    trim: true,
    required: true,
  },
  otherDomain: {
    type: String,
    trim: true,
  },
  interestedDomain: {
    type: Array,
    required: true,
  },
  department: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('joinUs', joinUs);
