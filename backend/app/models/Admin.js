const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      trim: true,
    },
    contact: {
      type: String,
      trim: true,
    },
    isSuperAdmin: {
      type: Boolean,
    },
    username: {
      type: String,
      trim: true,
      unique: true,
    },
    image: {
      type: String,
      trim: true,
    },
    refreshToken:{
      type:String,
      trim:true
    }
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

module.exports = mongoose.model('Admin', adminSchema, 'admins');
