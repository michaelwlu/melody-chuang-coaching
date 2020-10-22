import React from 'react';
import Navbar from './navbar/Navbar';
import { NavProvider } from '../context/ResponsiveNav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <NavProvider>
      <div className="relative min-h-screen">
        <Navbar />
        <div className="w-full pb-32 mx-auto">{children}</div>
        <Footer />
      </div>
    </NavProvider>
  );
};

export default Layout;
