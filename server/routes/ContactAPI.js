const express = require('express');
const { getContact, addContact } = require('../controllers/contactControl');

const contactRouter = express.Router();
contactRouter.route('/').get(getContact);
contactRouter.route('/').post(addContact);

module.exports = contactRouter;
