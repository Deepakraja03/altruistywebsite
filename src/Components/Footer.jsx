import React from 'react'
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import linkedin from '../assets/LinkedIn.png';
import twitter from '../assets/Twitter.png';
import logo1 from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#28316B] text-white'>
        <div className='flex items-center justify-center'>
            <img className='h-24 w-80 mt-10' src={logo1} alt="Raja Decors"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 px-0 mx-0 md:mx-5 mt-10'>
            <div className='list-none flex flex-col gap-2 justify py-4 md:mx-0 text-2xl'>
                <Link to='/' className='hover:text-[#CE4D2E]'>
                    <p>Home</p>
                </Link>
                <Link to='/about' className='hover:text-[#CE4D2E]'>
                    <p>Altruisty Launchpad</p>
                </Link>
                <Link to='/services' className='hover:text-[#CE4D2E]'>
                    <p>Service</p>
                </Link>
                <Link to='/gallery' className='hover:text-[#CE4D2E]'>
                    <p>Project Showcase</p>
                </Link>
                <Link to='/contact' className='hover:text-[#CE4D2E]'>
                    <p>Community</p>
                </Link>
                <Link to='/contact' className='hover:text-[#CE4D2E]'>
                    <p>About us</p>
                </Link>
                <Link to='/contact' className='hover:text-[#CE4D2E]'>
                    <p>Contact us</p>
                </Link>
            </div>
            <div className='text-2xl'>
                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Upcoming Events</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Jobs and Internships</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Events and Competitions</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Volunteer & Sponsorship Opportunities</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Community</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Funding Schemes and Opportunities</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Mentor and Incubation Service</h2>
                </div>
            </div>

            <div className='text-2xl'>
                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Startup Blog</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Collaborate with Us</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Launchpad</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Project Showcase</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Investor and Startup Connect</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Featured Jobs and Internships</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Upcoming Events and Competitions</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Our Impact</h2>
                </div>

                <div className='my-2 hover:cursor-pointer hover:text-[#CE4D2E]'>
                    <h2>Success Stories</h2>
                </div>
            </div>

            <div className=''>
                <h1 className='text-[#CE4D2E] font-bold md:text-3xl'>Get in Touch</h1>
                <div className=''>
                <div className='text-xl font-semibold my-5'>
                    <span className='font-bold text-2xl'>Email: </span>contact@ourplatform.com
                </div>
                <div className='text-xl font-semibold my-5'>
                    <span className='font-bold text-2xl'>Phone: </span>+1 234 567 890
                </div>
                <div className='text-xl font-semibold my-5'>
                    <span className='font-bold text-2xl'>Address: </span>1234 Street Name,<br />
                    City, Country
                </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-8 mx-4 md:mx-0'>
            <a href='' target='_blank'>
                <img className='h-16 my-8 hover:scale-110 transition duration-300'  src={facebook} alt='facebook'/>
            </a>
            <a href='' target='_blank' className=''>
                <img className='h-16 my-8 hover:scale-110 transition duration-300'  src={twitter} alt='facebook'/>
            </a>
            <a href='' target='_blank' className=''>
                <img className='h-16 my-8 hover:scale-110 transition duration-300'  src={linkedin} alt='facebook'/>
            </a>
            <a href=''>
                <img className='h-16 my-8 hover:scale-110 transition duration-300'  src={youtube} alt='youtube'/>
            </a>
        </div>
        <div className='font-bold capitalize'>
            <p className='md:text-xl text-lg text-center pb-8'>
            ©<span className='text-[#CE4D2E]'>Altruisty</span>. all rights reserved
            </p>
        </div>
    </div>
  )

}

export default Footer;