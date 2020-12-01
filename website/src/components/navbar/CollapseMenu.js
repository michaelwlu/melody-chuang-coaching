import React from 'react';
import CollapseLinkButton from './CollapseLinkButton';
import navList from './navList';

const CollapseMenu = () => {
  return (
    <div>
      <nav className="absolute right-0 z-40 flex flex-col items-end justify-between w-full text-sm text-white bg-black shadow-xl bg-opacity-90 md:hidden">
        {navList.map((navItem, idx) => (
          <CollapseLinkButton key={idx} linkProps={navItem} />
        ))}
      </nav>
    </div>
  );
};

export default CollapseMenu;
