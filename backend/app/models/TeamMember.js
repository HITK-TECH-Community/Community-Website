const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamMemberSchema = new Schema({
  full_name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  linkedin_url: {
    type: String,
  },
  github_url: {
    type: String,
  },
  twitter_url: {
    type: String,
  },
  teams: [String],
});
module.exports = mongoose.model('teammember', teamMemberSchema);
