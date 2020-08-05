import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavLinkButton = ({ linkProps }) => {
  return (
    <NavLink
      to={linkProps.to}
      className={
        linkProps.highlight
          ? 'relative top-0 inline-block px-2 py-1 ml-1 tracking-widest text-white uppercase transition-all duration-300 bg-black rounded focus:outline-none ease-in-out focus-visible:bg-blue-500 hover:top-sm hover:bg-blue-500'
          : 'top-0 inline-block py-1 mx-2 tracking-widest uppercase duration-300 rounded animate-underline focus:outline-none  focus-visible:text-blue-600 focus-visible:bg-gray-300 focus-visible:px-2 focus-visible:mx-0 hover:top-sm'
      }
      activeClassName={linkProps.highlight ? '' : ''}
    >
      {linkProps.name}
    </NavLink>
  );
};

export default withRouter(NavLinkButton);
