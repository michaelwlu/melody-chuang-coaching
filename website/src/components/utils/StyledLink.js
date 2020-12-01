import React from 'react';

const StyledLink = ({ children, href, title }) => {
  return (
    <a
      className="transition duration-200 ease-in-out text-themeblue-500 hover:text-themeblue-200 focus:text-themeblue-200 focus:outline-none"
      href={href}
      target="_blank"
      rel="noopener"
      {...(title ? { title: title } : {})}
    >
      {children}
    </a>
  );
};

export default StyledLink;
