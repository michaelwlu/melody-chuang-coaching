const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const { contactFormat, applicationFormat } = require('./emailFormatter');

async function mailer(type, body) {
  try {
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    const accessToken = oauth2Client.getAccessToken();

    let gmailTransportConfig = {
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken,
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
