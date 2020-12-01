const mongoose = require('mongoose');

// create schema for contact
const ApplicationSchema = new mongoose.Schema({
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
  q1: {
    prompt: String,
    response: {
      type: String,
      required: [true, 'Please enter a response'],
    },
  },
  q2: {
    prompt: String,
    response: {
      type: String,
      required: [true, 'Please enter a response'],
    },
  },
  q3: {
    prompt: String,
    response: {
      type: String,
      required: [true, 'Please enter a response'],
    },
  },
  q4: {
    prompt: String,
    response: {
      type: String,
      required: [true, 'Please enter a response'],
    },
  },
  q5: {
    prompt: String,
    response: {
      type: String,
      required: [true, 'Please enter a response'],
    },
  },
  q6: {
    prompt: String,
    response: {
      type: String,
      required: [true, 'Please enter a response'],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// create model for contact
module.exports = mongoose.model('Application', ApplicationSchema);
