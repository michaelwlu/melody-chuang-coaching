import React, { useContext, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import LogoHorizontal from '../../assets/Horizontal-Name.png';
import LogoVertical from '../../assets/Vertical-Name.png';
import CollapseMenu from './CollapseMenu';
import { NavContext } from '../../context/ResponsiveNav';
import NavLinkButton from '../navbar/NavLinkButton';
import navList from './navList';

const Navbar = () => {
  const { toggleNav } = useContext(NavContext);

  return (
    <>
      {/* Navbar container */}
      <div className="relative z-40 w-full bg-white border-b">
        <nav className="flex items-end justify-between w-full max-w-5xl py-3 pl-6 pr-4 mx-auto text-sm text-black md:justify-around md:px-5 md:py-6 lg:text-base font-themeSans">
          <div className="items-center justify-around hidden mt-2 md:flex w-2/9">
            <NavLinkButton linkProps={navList[0]} />
            <NavLinkButton linkProps={navList[1]} />
          </div>

          <div className="hidden px-2 mx-2 md:flex w-4/9 lg:w-5/9">
            <NavLink
              to="/"
              className="relative top-0 mx-auto transition-all duration-300 focus:outline-none hover:top-sm"
            >
              <img
                className="w-full max-w-md"
                src={LogoHorizontal}
                alt="Melody Chuang, Certified Life Coach"
              />
            </NavLink>
          </div>

          <div className="items-center justify-around hidden mt-2 md:flex w-2/9">
            <NavLinkButton linkProps={navList[2]} />
            <NavLinkButton linkProps={navList[3]} />
          </div>

          <div className="flex w-20 px-1 md:hidden">
            <NavLink to="/" className="m-auto focus:outline-none">
              <img
                className="w-full"
                src={LogoVertical}
                alt="Melody Chuang, Certified Life Coach"
              />
            </NavLink>
          </div>

          <div className="inline-block md:hidden">
            <button
              onClick={toggleNav}
              className="px-2 py-2 rounded hover:text-themeBlue focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Menu</title>
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <CollapseMenu />
    </>
  );
};

export default withRouter(Navbar);
