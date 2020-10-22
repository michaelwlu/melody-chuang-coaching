import React from 'react';
import Link from 'next/link';
import StyleLink from './StyleLink';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex justify-center w-full mx-auto mb-10 text-xs text-center lg:text-sm font-themeSans">
      <p>
        <span>
          ©2020 Melody Chuang Coaching |{' '}
          <StyleLink>
            <Link href="/privacy">Privacy Policy</Link>
          </StyleLink>{' '}
          | Developed by Michael W. Lu
        </span>
      </p>
    </footer>
  );
};

export default Footer;
