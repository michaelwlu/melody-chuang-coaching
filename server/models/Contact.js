const mongoose = require('mongoose');

// create schema for contact
const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your last name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
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
