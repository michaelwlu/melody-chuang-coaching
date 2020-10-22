import React from 'react';
import Link from 'next/link';

const NavLinkButton = ({ linkProps }) => {
  return (
    <Link href={linkProps.to}>
      <a
        className={`${
          linkProps.highlight
            ? 'inline-block px-2 py-1 ml-1 tracking-widest text-white bg-themeblue-900 rounded-md uppercase transform transition duration-200 ease-in-out hover:bg-themeblue-400 focus:bg-themeblue-400 hover:translate-y-px focus:translate-y-px'
            : 'inline-block py-1 mx-2 tracking-widest uppercase animate-underline transform transition ease-in-out duration-200 hover:translate-y-px focus:translate-y-px'
        } focus:outline-none`}
      >
        {linkProps.name}
      </a>
    </Link>
  );
};

export default NavLinkButton;
