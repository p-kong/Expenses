const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add some text'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please add some text'],
  },
});

module.exports = userSchema;
