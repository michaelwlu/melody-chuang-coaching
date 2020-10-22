import React from 'react';

const StyleLink = ({ children, color = 'blue' }) => {
  return (
    <span
      className={`text-theme${color}-500 hover:text-theme${color}-200 transition duration-200 ease-in-out`}
    >
      {children}
    </span>
  );
};

export default StyleLink;
