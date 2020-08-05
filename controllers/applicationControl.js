const Application = require('../models/Application');
const mailer = require('../mailer');

// @desc		Get all application info
// @route		GET	/api/application
// @access	Public
exports.getApplication = async (req, res, next) => {
  try {
    // Find all contact
    const applications = await Application.find();

    // Return success response with count and data
    return res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    // Return server error response
    return res.status(500).json({
      success: false,
      error: ['Internal server error, please try again later'],
    });
  }
};

// @desc		Add application
// @route		POST /api/application
// @access	Public
exports.addApplication = async (req, res, next) => {
  try {
    // Destructure parsed body
    const { firstName, lastName, email, q1, q2, q3, q4, q5, q6 } = req.body;

    // Use request body on Contact model
    const application = await Application.create(req.body);

    mailer('application', application);

    // Return success response and added data
    return res.status(201).json({
      success: true,
      data: application,
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
