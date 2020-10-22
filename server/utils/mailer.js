const nodemailer = require('nodemailer');
const { contactFormat, applicationFormat } = require('./emailFormatter');

async function mailer(type, body) {
  try {
    let gmailTransportConfig = {
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      },
      tls: {
        rejectUnauthorized: false,
      },
    };

    let transporter = nodemailer.createTransport(gmailTransportConfig);

    let mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
    };

    let mailTypeOptions =
      type === 'contact'
        ? {
            subject: 'New Contact Request',
            html: contactFormat(body),
          }
        : type === 'application'
        ? {
            subject: 'New Application',
            html: applicationFormat(body),
          }
        : {
            subject: 'Unknown Error',
            text: 'Unknown Mailer Error',
          };

    let info = await transporter.sendMail({
      ...mailOptions,
      ...mailTypeOptions,
    });

    console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
    console.error(`Mailer Error: ${error}`);
  }
}

module.exports = mailer;
