import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ContactInfo from '../Forms/ContactInfo';
import SubmitButton from '../Forms/SubmitButton';
import { sendContact } from '../Forms/FormSubmission';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [contactError, setContactError] = useState([]);

  const [isDisabled, setIsDisabled] = useState(false);

  let history = useHistory();

  const requireAll = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);

    const newContact = {
      id: uuidv4(),
      ...contactInfo,
    };

    sendContact(newContact).then((res) => {
      switch (res.status) {
        case 201:
          history.push('/contact-success');
          break;
        case 400:
          setContactError(res.data.error);
          break;
        case 500:
          setContactError([res.statusText]);
          break;
        default:
          setContactError(['Unknown Error']);
      }
    });
  };

  const updateField = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="relative w-11/12 max-w-md mx-auto mt-10 mb-32 md:max-w-xl lg:max-w-2xl md:mt-12">
      <h1 className="mb-6 text-3xl italic font-semibold leading-tight lg:text-4xl font-themeSerif">
        Let's chat - I wanna meet you!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="relative text-sm lg:text-base font-themeSans"
      >
        <ContactInfo
          info={{
            firstName: contactInfo.firstName,
            lastName: contactInfo.lastName,
            email: contactInfo.email,
          }}
          updateField={updateField}
          showIcons={true}
          requireAll={requireAll}
        />
        <div className="block mb-6 md:mb-8 md:mt-4">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required={requireAll}
            maxLength={10000}
            value={contactInfo.message}
            onChange={updateField}
            className="block w-full mt-2 text-sm bg-gray-100 border-opacity-50 border-themeBlue form-textarea lg:text-base"
            rows="6"
          />
        </div>
        <SubmitButton isDisabled={isDisabled} />
        <div className="mt-3 text-xs text-red-700">
          {contactError &&
            contactError.map((msg, idx) => <p key={idx}>{msg}</p>)}
        </div>
      </form>
    </main>
  );
};

export default Contact;
