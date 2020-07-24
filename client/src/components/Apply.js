import React, { useState } from 'react';

const Apply = () => {
  const [application, setApplication] = useState({
    firstName: '',
    lastName: '',
    email: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(application);
  };

  const updateField = (e) => {
    setApplication({
      ...application,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="max-w-3xl mx-auto mt-16 mb-32">
      <h1 className="mb-3 text-4xl italic font-semibold font-themeSerif">
        Client Application Form
      </h1>
      <p className="pb-8 border-b">
        Please complete the below questions with as much detail as possible. If
        you are a good fit, I will reach out for a consultation call. On this
        call, I may ask you further questions and you will have the opportunity
        to ask me questions as well. If you are then invited to work with me,
        the details of the coaching agreement will be offered and you will be
        expected to make payment on the call. Looking forward to creating magic!
        xx Melody
      </p>
      <form onSubmit={handleSubmit} className="mt-10 text-md font-themeSans">
        <section className="space-y-4">
          <label for="first-name" className="inline-block">
            <span>First Name</span>
            <input
              id="first-name"
              type="text"
              name="firstName"
              value={application.firstName}
              onChange={updateField}
              required
              className="block w-64 mt-2 bg-purple-100 border-purple-200 form-input"
            />
          </label>
          <label for="last-name" className="inline-block ml-4">
            <span>Last Name</span>
            <input
              id="last-name"
              type="text"
              name="lastName"
              value={application.lastName}
              onChange={updateField}
              required
              className="block w-64 mt-2 bg-purple-100 border-purple-200 form-input"
            />
          </label>
          <label for="email" className="block">
            <span>Email</span>
            <input
              id="email"
              type="email"
              name="email"
              value={application.email}
              onChange={updateField}
              required
              className="block mt-2 bg-purple-100 border-purple-200 w-88 form-input"
            />
          </label>
        </section>
        <section className="py-8 space-y-8">
          <label for="q1" className="block pt-8">
            <span>
              What is your business and for how long have you been in business?
            </span>
            <textarea
              id="q1"
              name="q1"
              value={application.q1}
              onChange={updateField}
              required
              className="block w-full mt-4 bg-purple-100 border-purple-200 form-textarea"
              rows="4"
            />
          </label>
          <label for="q2" className="block">
            <span>
              What impact are you making (or hoping to make) with your business?
            </span>
            <textarea
              id="q2"
              name="q2"
              value={application.q2}
              onChange={updateField}
              required
              className="block w-full mt-4 bg-purple-100 border-purple-200 form-textarea"
              rows="4"
            />
          </label>
          <label for="q3" className="block">
            <span>What is your top priority for your business right now? </span>
            <textarea
              id="q3"
              name="q3"
              value={application.q3}
              onChange={updateField}
              required
              className="block w-full mt-4 bg-purple-100 border-purple-200 form-textarea"
              rows="4"
            />
          </label>
          <label for="q4" className="block">
            <span>
              What else have you tried to achieve this priority (coaches,
              programs, books) and why haven't they worked?
            </span>
            <textarea
              id="q4"
              name="q4"
              value={application.q4}
              onChange={updateField}
              required
              className="block w-full mt-4 bg-purple-100 border-purple-200 form-textarea"
              rows="4"
            />
          </label>
          <label for="q5" className="block">
            <span>
              If we were to work together, where would you like to see yourself
              + your business at the end of our time together?
            </span>
            <textarea
              id="q5"
              name="q5"
              value={application.q5}
              onChange={updateField}
              required
              className="block w-full mt-4 bg-purple-100 border-purple-200 form-textarea"
              rows="4"
            />
          </label>
          <label id="q6" className="block">
            <span>How committed are you to making this happen now?</span>
            <textarea
              id="q6"
              name="q6"
              value={application.q6}
              onChange={updateField}
              required
              className="block w-full mt-4 bg-purple-100 border-purple-200 form-textarea"
              rows="4"
            />
          </label>
        </section>
        <input
          type="submit"
          value="Submit"
          className="px-6 py-2 tracking-wider text-white uppercase bg-black cursor-pointer"
        />
      </form>
    </main>
  );
};

export default Apply;
