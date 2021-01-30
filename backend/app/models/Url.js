const mongoose = require('mongoose');
const { Schema } = mongoose;
const shortLinksSchema = new Schema({
  urlCode: {
    type: String,
  },
  longUrl: {
    type: String,
  },
  shortUrl: {
    type: String,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model('Url', shortLinksSchema);
