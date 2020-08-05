import React, { useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { NavContext } from '../../context/ResponsiveNav';

const CollapseLinkButton = ({ linkProps }) => {
  const { toggleNav } = useContext(NavContext);

  return (
    <NavLink
      to={linkProps.to}
      className="block w-full py-1 pr-4 tracking-wider text-right uppercase transition duration-200 ease-out border-t border-b border-white border-opacity-20 hover:text-blue-300 focus:outline-none focus-visible:text-blue-300 focus-visible:bg-gray-800"
      onClick={toggleNav}
      exact
    >
      {linkProps.name}
    </NavLink>
  );
};

export default withRouter(CollapseLinkButton);
