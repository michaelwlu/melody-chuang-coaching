import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../assets/Horizontal-Name.png';

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex justify-around max-w-5xl py-6 mx-auto font-themeSans">
        <div className="flex items-center justify-around mx-1 w-2/9">
          <Link to="/" className="inline-block p-1 tracking-widest uppercase">
            Home
          </Link>
          <Link
            to="/community"
            className="inline-block p-1 tracking-widest uppercase"
          >
            Community
          </Link>
        </div>

        <div className="px-3 w-5/9">
          <Link to="/" className="">
            <img
              className="w-full max-w-md m-auto"
              src={Logo}
              alt="Melody Chuang, Certified Life Coach"
            />
          </Link>
        </div>

        <div className="flex items-center justify-around mx-1 w-2/9">
          {/* <a
            href="https://podcasts.apple.com/us/podcast/the-honor-your-body-podcast/id1478957908"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-1 tracking-widest uppercase"
          >
            Podcast
          </a> */}
          <Link
            to="/apply"
            className="inline-block p-1 tracking-widest uppercase"
          >
            Apply
          </Link>
          <Link
            to="/contact"
            className="inline-block p-1 tracking-widest uppercase"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
