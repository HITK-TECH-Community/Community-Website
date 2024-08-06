const mongoose = require('mongoose');

const { Schema } = mongoose;

const answerSchema = new Schema(
  {
    question_id: {
      type: mongoose.Schema.Types.ObjectId,
      trim: true,
      required: true,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    created_by: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes:{
      type:Number,
      default:0
    },
    created_on: {
      type: Date,
      required: true,
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

module.exports = mongoose.model('answer', answerSchema);
