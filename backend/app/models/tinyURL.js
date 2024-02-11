const mongoose = require('mongoose');

const { Schema } = mongoose;
const tinyURLSchema = new Schema({
  urlCode: {
    type: String,
  },
  longURL: {
    type: String,
  },
  shortURL: {
    type: String,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model('tinyURL', tinyURLSchema);
