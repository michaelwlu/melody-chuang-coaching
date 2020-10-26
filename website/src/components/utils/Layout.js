import React from 'react';
import { NavProvider } from '../../context/ResponsiveNav';
import Navbar from '../navbar/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <NavProvider>
      <Navbar />
      <div className="w-full mx-auto">{children}</div>
      <Footer />
    </NavProvider>
  );
};

export default Layout;
