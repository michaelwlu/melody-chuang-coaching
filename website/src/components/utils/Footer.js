import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full px-6 mx-auto mt-24 mb-10 font-sans text-xs lg:text-sm">
      <div className="flex justify-center text-center">
        <span>
          ©2020 Melody Chuang Coaching |{' '}
          <Link href="/privacy">
            <a className="transition duration-200 ease-in-out text-themeblue-500 hover:text-themeblue-200 focus:text-themeblue-200 focus:outline-none">
              Privacy Policy
            </a>
          </Link>{' '}
          | Made by Michael W. Lu
        </span>
      </div>
    </footer>
  );
};

export default Footer;
