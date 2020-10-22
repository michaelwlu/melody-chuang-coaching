import axios from 'axios';

const sendContact = async (contact) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: 'http://localhost:5000',
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
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  };

  try {
    const res = await axios.post('/api/application', application, config);
    return res;
  } catch (error) {
    return error.response;
  }
};

export { sendContact, sendApplication };
