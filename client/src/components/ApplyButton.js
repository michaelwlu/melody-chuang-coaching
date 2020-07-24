import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ApplyButton = () => {
  return (
    <Link to="/apply">
      <button className="px-8 py-3 tracking-wider text-white uppercase bg-black font-themeSans">
        Apply for a free consultation
      </button>
    </Link>
  );
};

export default withRouter(ApplyButton);
