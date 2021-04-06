const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactUsUserSchema = new Schema(
  {
    name: {
      type: String,
      min: [3, 'Name length must be at least 3 characters long'],
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      min: [5, 'Subject length must be at least 5 characters long'],
      trim: true,
    },
    message: {
      type: String,
      required: true,
      min: [8, 'Message length must be at least 8 characters long'],
      trim: true,
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

module.exports = mongoose.model('ContactUsUsers', contactUsUserSchema);
