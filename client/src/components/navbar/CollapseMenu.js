import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { NavContext } from '../../context/ResponsiveNav';
import CollapseLinkButton from './CollapseLinkButton';
import navList from './navList';

const CollapseMenu = () => {
  const { isNavVisible, isSmallScreen } = useContext(NavContext);

  return (
    <div>
      {isNavVisible && isSmallScreen && (
        <nav className="absolute right-0 z-40 flex flex-col items-end justify-between w-full text-sm text-white bg-black shadow-xl bg-opacity-90">
          {navList.map((navItem) => (
            <CollapseLinkButton linkProps={navItem} />
          ))}
        </nav>
      )}
    </div>
  );
};

export default withRouter(CollapseMenu);
