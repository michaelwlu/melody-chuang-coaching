const nodemailer = require('nodemailer');
const {
  mainContactFormat,
  clientContactFormat,
  mainApplicationFormat,
  clientApplicationFormat,
} = require('./emailFormatter');

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

    let mainHeaders = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
    };

    let clientHeaders = {
      from: `Melody <${process.env.GMAIL_USER}>`,
      to: body.email,
    };

    let mainConfig =
      type === 'contact'
        ? {
            subject: 'New Contact Request',
            html: mainContactFormat(body),
          }
        : type === 'application'
        ? {
            subject: 'New Application',
            html: mainApplicationFormat(body),
          }
        : {
            subject: 'Unknown Error',
            text: 'Unknown Mailer Error',
          };

    let clientConfig =
      type === 'contact'
        ? {
            subject: 'Thank you for your message!',
            html: clientContactFormat(body),
          }
        : type === 'application'
        ? {
            subject: 'Your application has been received!',
            html: clientApplicationFormat(body),
          }
        : {
            subject: 'Unknown Error',
            text: 'Unknown Mailer Error',
          };

    let mainInfo = await transporter.sendMail({
      ...mainHeaders,
      ...mainConfig,
    });
    console.log(`Message sent: ${mainInfo.messageId}`);

    let clientInfo = await transporter.sendMail({
      ...clientHeaders,
      ...clientConfig,
    });
    console.log(`Message sent: ${clientInfo.messageId}`);
  } catch (error) {
    console.error(`Mailer Error: ${error}`);
  }
}

module.exports = mailer;
