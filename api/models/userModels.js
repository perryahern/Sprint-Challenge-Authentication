const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: String
});

module.exports = mongoose.model('User', UserSchema);
