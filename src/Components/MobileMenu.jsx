import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path 
      ? "text-[#FD8901] font-semibold scale-125 transition duration-500 md:mx-0 cursor-pointer"
      : "hover:text-[#FD8901] font-semibold hover:scale-125 transition duration-500 md:mx-0 cursor-pointer";
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white transition-transform transform duration-500 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-black text-2xl">
          &times;
        </button>
      </div>
      <nav className="flex flex-col items-center text-xl mt-2 space-y-3">
        <Link to="/" className={getLinkClassName("/")} onClick={onClose}>
          Home
        </Link>
        <Link to="/services" className={getLinkClassName("/services")} onClick={onClose}>
          Altruisty Launchpad
        </Link>
        <Link to="/gallery" className={getLinkClassName("/gallery")} onClick={onClose}>
          Service
        </Link>
        <Link to="/about" className={getLinkClassName("/about")} onClick={onClose}>
          Project Showcase
        </Link>
        <Link to="/community" className={getLinkClassName("/community")} onClick={onClose}>
          Community
        </Link>
        <Link to="/about-us" className={getLinkClassName("/about-us")} onClick={onClose}>
          About us
        </Link>
        <Link to="/contact-us" className={getLinkClassName("/contact-us")} onClick={onClose}>
          Contact us
        </Link>
        <Link to="/login" className={getLinkClassName("/login")} onClick={onClose}>
          Login
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;