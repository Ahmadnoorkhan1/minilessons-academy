import React, { useState } from 'react';
import '../App.css';
import { NAVLINKS } from '../utilities/data/NavbarLinks';
import { useParams } from 'react-router';

const Navbar: React.FC = () => {
  const params = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar container">
        {/* Logo */}
        <div className="order-0">
          <a href="index.html" className='flex items-center gap-2'>
            <img src="/images/logo.png" height="30" width="40" alt="logo" />
            <span className='lg:text-[32px] text-lg font-bold text-[#650AAA]'>Mini Lessons Academy</span>
          </a>
        </div>

        {/* Navbar Toggler */}
        <button
          id="show-button"
          className="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden"
          onClick={toggleMenu}
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20" style={{ fill: '#650AAA' }}>
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>

        </button>

        <button
          id="hide-button"
          className={`order-2 hidden cursor-pointer items-center lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
          onClick={toggleMenu}
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </button>

        {/* Navbar Links */}
        <ul
          id="nav-menu"
          className={`navbar-nav order-2 lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5 ${isMenuOpen ? 'block' : 'hidden'} w-full`}
        >
          {
            NAVLINKS.map((navlink: any, index: any) => {
              return (
                <li className="nav-item font-sans" key={index}>
                  <a href={navlink.href} className={`nav-link ${Object.values(params).length === index && 'active'}`}>{navlink.title}</a>
                </li>
              )
            })
          }
        </ul>

        {/* Sign Up Button */}
        <div className="order-1 ml-auto hidden items-center md:order-2 md:ml-0 lg:flex">
          <a className="btn btn-white btn-sm" href="signin.html">Sign Up Now</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;