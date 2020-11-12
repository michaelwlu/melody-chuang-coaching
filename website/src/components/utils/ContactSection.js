import React from 'react';
import ContactBox from '../forms/ContactBox';
import LCSCert from './LCSCert';

const ContactSection = () => {
  return (
    <div className="w-full border-t">
      <div className="flex flex-col-reverse items-center justify-center max-w-4xl px-6 pt-8 mx-auto md:space-x-12 md:items-start md:flex-row md:pt-12">
        <ContactBox />
        <LCSCert />
      </div>
    </div>
  );
};

export default ContactSection;
