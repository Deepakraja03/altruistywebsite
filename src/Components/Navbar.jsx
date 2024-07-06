import { useEffect, useState } from 'react';
import React from 'react';
import Moon from '../assets/logo-removebg-preview.png';
import MobileMenu from './MobileMenu';
import { Link, useLocation } from "react-router-dom";
import profile from '../assets/ProfileLogo.png';
import carouselData from '../Components/Json/ServiceCarouselData.json';

const imageMap = {
  image1: require('../assets/Upcomingevents.png'),
  image2: require('../assets/Jobsandinternships.png'),
  image3: require('../assets/Volunteer.png'),
  image4: require('../assets/Featuredjobs.png'),
  image5: require('../assets/Mentor.png')
};

const debounce = (func, delay) => {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

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

  const [info, setInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = debounce((term) => {
    setIsLoading(true);
    // Simulate an API call or any async operation
    setTimeout(() => {
      const filteredSlides = carouselData.filter(slide =>
        slide.title.toLowerCase().includes(term.toLowerCase())
      ).map(slide => ({
        ...slide,
        image: imageMap[slide.imageKey]
      }));
      setInfo(filteredSlides);
      setIsLoading(false);
    }, 500);
  }, 300);

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    } else {
      setInfo([]); // Clear results if search term is empty
    }
  }, [searchTerm]);

  return (
    <div>
      <div className="relative flex justify-between px-5 md:py-5 md:px-5">
        <div className="hidden md:flex items-center pl-0">
          <img className="absolute" src={Moon} height={150} width={150} alt="moon" />
        </div>
        <div className="md:hidden flex items-center text-center pl-20">
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
        <div className='hidden md:flex md:gap-10'>
          <div>
            <input 
              type="search" 
              className='border-2 border-black rounded-lg px-2 p-2 w-96 h-10 text-lg' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search'
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
          <Link to="/profile" className={getLinkClassName("/profile")}>
              <img src={profile} alt='profile' className='h-10 w-10'/>
          </Link>
        </div>
      </div>
      <nav className="hidden items-center text-lg md:flex md:items-center md:gap-20 md:justify-center md:pb-2">
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
        </nav>
        <div className='md:hidden flex items-center justify-center pb-4'>
            <input 
              type="search" 
              className='border-2 border-black rounded-lg p-2 w-80 h-10 text-sm' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search'
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
        </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      {/* Display the filtered search results only when the search bar is focused */}
      {isSearchFocused && searchTerm && (
        <div className="px-5 md:px-5 py-5 transition-opacity duration-500 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4">Search Results:</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : info.length > 0 ? (
            <ul>
              {info.map((slide, index) => (
                <li key={index} className="mb-2 flex items-center gap-4 transition-transform duration-500 ease-in-out transform hover:scale-105">
                  <img src={slide.image} alt={slide.imageKey} className="h-10 w-10" />
                  {slide.title}
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
