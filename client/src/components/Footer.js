import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mx-auto my-12 text-xs text-center lg:text-sm font-themeSans">
      <p>
        <span>
          ©2020 Melody Chuang Coaching |{' '}
          <NavLink to="/privacy" className="text-blue-600">
            Privacy Policy
          </NavLink>{' '}
          | Website by Michael W. Lu
        </span>
      </p>
    </footer>
  );
};

export default Footer;
