const mongoose = require('mongoose');

const { Schema } = mongoose;
const broadcastSchema = new Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    link: {
      type: String,
    },
    isExpired: {
      type: Boolean,
    },
    imageUrl: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

module.exports = mongoose.model('broadcast', broadcastSchema);
