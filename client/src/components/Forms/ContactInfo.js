import React from 'react';

const ContactInfo = ({ info, updateField, showIcons, requireAll }) => {
  return (
    <section className="pb-4">
      <div className="block mt-4 align-top md:inline-block md:mr-4 md:w-64">
        <label htmlFor="first-name">First Name</label>
        <div className="relative">
          <input
            id="first-name"
            type="text"
            name="firstName"
            autoComplete="given-name"
            required={requireAll}
            maxLength={300}
            value={info.firstName}
            onChange={updateField}
            className={`block w-full ${
              showIcons ? 'pl-10' : ''
            } mt-2 text-sm bg-gray-100 border-themeBlue border-opacity-50  form-input lg:text-base z-0`}
          />
          {showIcons && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 opacity-75 text-themeBlue"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          )}
        </div>
      </div>

      <div className="block mt-4 align-top md:inline-block md:w-64">
        <label htmlFor="last-name">Last Name</label>
        <div className="relative">
          <input
            id="last-name"
            type="text"
            name="lastName"
            autoComplete="family-name"
            required={requireAll}
            maxLength={300}
            value={info.lastName}
            onChange={updateField}
            className={`block w-full ${
              showIcons ? 'pl-10' : ''
            } mt-2 text-sm bg-gray-100 border-themeBlue border-opacity-50  form-input lg:text-base`}
          />
          {showIcons && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 opacity-75 text-themeBlue"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
          )}
        </div>
      </div>

      <div className="block mt-4 md:mt-5">
        <label htmlFor="email">Email</label>
        <div className="relative">
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required={requireAll}
            maxLength={300}
            value={info.email}
            onChange={updateField}
            className={`block w-full ${
              showIcons ? 'pl-10' : ''
            } mt-2 text-sm bg-gray-100 border-themeBlue border-opacity-50 md:w-88 form-input lg:text-base`}
          />
          {showIcons && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 opacity-75 text-themeBlue"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
