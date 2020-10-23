import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { v4 as uuidv4 } from 'uuid';
import ContactInfo from '../components/forms/ContactInfo';
import SubmitButton from '../components/forms/SubmitButton';
import { sendContact } from '../components/forms/FormSubmission';

const emptyContactInfo = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

const testContactInfo = {
  firstName: 'TestFirst',
  lastName: 'TestLast',
  email: 'TestEmail@test.com',
  message: String(Date.now()),
};

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(testContactInfo);

  const [contactError, setContactError] = useState([]);
  const [contactSuccess, setContactSuccess] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  const requireAll = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsDisabled(true);

    const newContact = {
      id: uuidv4(),
      ...contactInfo,
    };
    console.log(newContact);

    sendContact(newContact).then((res) => {
      switch (res.status) {
        case 201:
          setContactSuccess(true);
          break;
        case 400:
          setContactError(res.data.error);
          break;
        case 500:
          setContactError([res.statusText]);
          break;
        default:
          setContactError(['Unknown Error']);
        // console.log(res.data.error);
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
    <Layout>
      <Head>
        <title>Contact | Melody Chuang Coaching</title>
      </Head>
      <main className="relative w-11/12 max-w-md mx-auto mt-10 mb-32 md:max-w-xl lg:max-w-2xl md:mt-12">
        <h1 className="mb-6 text-3xl font-semibold leading-tight lg:text-4xl font-themeSerif">
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
              className="block w-full mt-2 text-sm bg-gray-100 border-opacity-50 border-themeblue-300 form-textarea lg:text-base"
              rows="6"
            />
          </div>
          <SubmitButton isDisabled={isDisabled} />
          <div className="mt-3 text-xs text-red-700">
            {contactError &&
              contactError.map((msg, idx) => <p key={idx}>{msg}</p>)}
          </div>
        </form>
        {contactSuccess ? (
          <div className="mt-6 text-sm lg:text-base font-themeSans">
            Thank you! I'll be reaching out to you soon!
          </div>
        ) : null}
      </main>
    </Layout>
  );
};

export default Contact;
