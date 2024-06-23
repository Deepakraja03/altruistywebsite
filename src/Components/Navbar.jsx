import { useState } from 'react';
import React from 'react';
import Moon from '../assets/logo-removebg-preview.png';
import MobileMenu from './MobileMenu';
import { Link, useLocation } from "react-router-dom";
import profile from '../assets/ProfileLogo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getLinkClassName = (path) => {
    return location.pathname === path 
      ? "text-[#FD8901] font-semibold scale-125 transition duration-500 md:mx-0 cursor-pointer"
      : "hover:text-[#FD8901] font-semibold hover:scale-110 transition duration-500 md:mx-0 cursor-pointer";
  };

  return (
    <div>
      <div className="relative flex justify-between px-5 md:py-5 md:px-5">
        <div className="flex items-center pl-0">
          <img className="absolute" src={Moon} height={150} width={150} alt="moon" />
        </div>
        <div className="flex my-5 items-center md:hidden">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        <nav className="hidden items-center text-lg md:flex md:items-center md:gap-8">
          <Link to="/" className={getLinkClassName("/")}>
            Home
          </Link>
          <Link to="/services" className={getLinkClassName("/services")}>
            Altruisty Launchpad
          </Link>
          <Link to="/gallery" className={getLinkClassName("/gallery")}>
            Service
          </Link>
          <Link to="/about" className={getLinkClassName("/about")}>
            Project Showcase
          </Link>
          <Link to="/community" className={getLinkClassName("/community")}>
            Community
          </Link>
          <Link to="/about-us" className={getLinkClassName("/about-us")}>
            About us
          </Link>
          <Link to="/contact-us" className={getLinkClassName("/contact-us")}>
            Contact us
          </Link>
          <Link to="/profile" className={getLinkClassName("/profile")}>
            <img src={profile} alt='profile' className='h-10 w-10'/>
          </Link>
        </nav>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};

export default Navbar;