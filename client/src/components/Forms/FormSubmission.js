import axios from 'axios';

const sendContact = async (contact) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/contact', contact, config);
    return res;
  } catch (error) {
    return error.response;
  }
};

const sendApplication = async (application) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/application', application, config);
    return res;
  } catch (error) {
    return error.response;
  }
};

export { sendContact, sendApplication };
