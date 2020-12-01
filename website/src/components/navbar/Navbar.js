import React, { useContext } from 'react';
import Link from 'next/link';
import CollapseMenu from './CollapseMenu';
import { NavContext } from '../../context/ResponsiveNav';
import NavLinkButton from './NavLinkButton';
import navList from './navList';
import Image from '../utils/Image';

const Navbar = () => {
  const { isNavVisible, toggleNav } = useContext(NavContext);

  return (
    <>
      {/* Navbar container */}
      <div className="relative z-40 w-full bg-white border-b">
        <nav className="flex items-end justify-between w-full max-w-5xl py-3 pl-6 pr-4 mx-auto text-sm text-black md:justify-around md:px-5 md:py-6 lg:text-base font-themeSans">
          <div className="items-center justify-around hidden mb-2 md:flex w-2/9">
            <NavLinkButton linkProps={navList[0]} />
            <NavLinkButton linkProps={navList[1]} />
          </div>

          <div className="hidden px-2 mx-2 md:flex w-4/9 lg:w-5/9">
            <Link href="/" tabIndex={0}>
              <a className="mx-auto transition duration-200 ease-in-out transform focus:outline-none">
                <Image
                  src="hlogo.png"
                  className="max-w-md"
                  alt="Melody Chuang, Certified Life Coach"
                />
              </a>
            </Link>
          </div>

          <div className="items-center justify-around hidden mb-2 md:flex w-2/9">
            <NavLinkButton linkProps={navList[2]} />
            <NavLinkButton linkProps={navList[3]} />
          </div>

          <div className="flex w-20 px-1 md:hidden">
            <Link href="/" tabIndex={0}>
              <a className="m-auto focus:outline-none">
                <Image
                  src="vlogo2.png"
                  alt="Melody Chuang, Certified Life Coach"
                />
              </a>
            </Link>
          </div>

          <div className="inline-block md:hidden">
            <button
              onClick={toggleNav}
              className="px-2 py-2 rounded hover:text-themeblue-400 focus:outline-none"
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
      {isNavVisible ? <CollapseMenu /> : null}
    </>
  );
};

export default Navbar;
