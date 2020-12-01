import React from 'react';
import Link from 'next/link';

const ApplyButton = ({ buttonText }) => {
  return (
    <Link href="/apply">
      <button
        className="px-8 py-3 text-sm tracking-wider text-white uppercase transition duration-200 ease-in-out transform rounded-md focus:outline-none bg-themeblue-900 font-themeSans lg:text-base hover:bg-themeblue-400 focus:bg-themeblue-400 hover:translate-y-px"
        type="button"
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default ApplyButton;
