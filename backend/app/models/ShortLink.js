const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    url: { type: String, required: true, unique: false },
    shortUrl: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ShortLink', adminSchema);
