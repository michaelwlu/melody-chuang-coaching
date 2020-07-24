import React, { useState } from 'react';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactInfo);
  };

  const updateField = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="max-w-2xl mx-auto mt-16 mb-32">
      <h1 className="mb-6 text-4xl italic font-semibold font-themeSerif">
        Let's chat - I wanna meet you!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 text-lg font-themeSans"
      >
        <label for="name" className="block">
          Name
          <div className="relative">
            <input
              id="name"
              type="text"
              name="name"
              value={contactInfo.name}
              onChange={updateField}
              className="block w-full pl-10 mt-2 bg-gray-100 form-input"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-blue-300"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          </div>
        </label>
        <label for="email" className="block">
          Email
          <div className="relative">
            <input
              id="email"
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={updateField}
              className="block w-full pl-10 mt-2 bg-gray-100 form-input"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-blue-300"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
        </label>
        <label for="message" className="block">
          Message
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={contactInfo.message}
              onChange={updateField}
              className="block w-full mt-2 bg-gray-100 form-textarea"
              rows="5"
            />
          </div>
        </label>
        <input
          type="submit"
          value="Submit"
          className="px-6 py-2 tracking-wider text-white uppercase bg-black cursor-pointer"
        />
      </form>
    </main>
  );
};

export default Contact;
