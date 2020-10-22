const Contact = require('../models/Contact');
const mailer = require('../utils/mailer');

// @desc		Get all contact info
// @route		GET	/api/contact
// @access	Public
exports.getContact = async (req, res, next) => {
  try {
    // Find all contact
    const contacts = await Contact.find();

    // Return success response with count and data
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    // Return server error response
    return res.status(500).json({
      success: false,
      error: ['Internal server error, please try again later'],
    });
  }
};

// @desc		Add contact
// @route		POST /api/contact
// @access	Public
exports.addContact = async (req, res, next) => {
  try {
    // Destructure parsed body
    const { firstName, lastName, email, message } = req.body;

    // Use request body on Contact model
    const contact = await Contact.create(req.body);

    mailer('contact', contact);

    // Return success response and added data
    return res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    // If error is ValidationError
    if (error.name === 'ValidationError') {
      // Create error messages array
      const messages = Object.values(error.errors).map(
        (val) => val.properties.message
      );
      // Return user error response with messages
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      // Return server error response
      return res.status(500).json({
        success: false,
        error: ['Internal server error, please try again later'],
      });
    }
  }
};
