const mailgun = require('mailgun-js');
// const DOMAIN = 'sandbox0b808b68ccc2418cbb719d051b15a677.mailgun.org';
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.DOMAIN_KEY,
});

// process.env.MAILGUN_DOMAIN_KEY
//apiKey:'a9f289e15a3b926bba95216a4dd84861-523596d9-5eacf8d7'

const sendWelcomeEmail = (email, name) => {
  const data = {
    to: email,
    from: 'ibrahimciloglu.ic@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  };
  return mg.messages().send(data);
};

const sendCandelationEmail = (email, name) => {
  const data = {
    to: email,
    from: 'ibrahimciloglu.ic@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon`,
  };
  return mg.messages().send(data);
};

module.exports = {
  sendWelcomeEmail,
  sendCandelationEmail,
};
