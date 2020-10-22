const express = require('express');
const {
  getApplication,
  addApplication,
} = require('../controllers/applicationControl');

const applicationRouter = express.Router();
applicationRouter.route('/').get(getApplication);
applicationRouter.route('/').post(addApplication);

module.exports = applicationRouter;
