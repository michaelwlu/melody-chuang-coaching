import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prevState) => !prevState);
  };

  return (
    <NavContext.Provider value={{ isNavVisible, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
};
