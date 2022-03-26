const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactUs = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    match: [/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('contactUs', contactUs);
