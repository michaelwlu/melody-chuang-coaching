import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ApplyButton = ({ buttonText }) => {
  return (
    <Link to="/apply">
      <button
        className="relative top-0 px-8 py-3 text-sm tracking-wider text-white uppercase transition-all duration-300 ease-in-out bg-black rounded font-themeSans lg:text-base hover:bg-blue-500 focus-visible:bg-blue-500 hover:top-sm"
        type="button"
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default withRouter(ApplyButton);
