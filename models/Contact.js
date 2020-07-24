const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for contact
const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
  },
  message: {
    type: String,
    required: [true, 'Please enter a message'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// create model for contact
module.exports = mongoose.model('Contact', ContactSchema);
