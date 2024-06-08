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
    expiresOn: {
      type: Date,
    },
    imageUrl: {
      type: Array,
    },
    tags: {
      type: Array,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

module.exports = mongoose.model('broadcast', broadcastSchema);
