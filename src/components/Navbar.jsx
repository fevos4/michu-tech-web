import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
    setClick(false);
  };

  return (
    <div className="w-full h-[100px]  bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 fixed top-0 left-0 z-50 border-b">
      <div className="max-w-[1140px] h-full mx-auto flex justify-between items-center">
        <a href="#">
          <p>LOGO</p> 
        </a>
        <ul
          className={`flex flex-col lg:flex-row justify-centr items-center w-full lg:w-auto lg:static transition-all duration-300 ease-in-out ${
            click ? 'fixed top-[90px] left-0 bg-[#0099FF] border ' : 'left-[100%] lg:h-auto'
          }`}
        >
          <li className={`p-4 cursor-pointer ${click ? 'block' : 'hidden lg:block'}`}>
            <a className="text-white hover:text-[#00d8ff]" onClick={() => scrollToSection('home')}>
              Home
            </a>
          </li>
          <li className={`p-4 cursor-pointer ${click ? 'block' : 'hidden lg:block'}`}>
            <a className="text-white hover:text-[#00d8ff]" onClick={() => scrollToSection('about')}>
              About Us
            </a>
          </li>
          <li className={`p-4 cursor-pointer ${click ? 'block' : 'hidden lg:block'}`}>
            <a className="text-white hover:text-[#00d8ff]" onClick={() => scrollToSection('services')}>
              Services
            </a>
          </li>
          <li className={`p-4 cursor-pointer ${click ? 'block' : 'hidden lg:block'}`}>
            <a className="text-white hover:text-[#00d8ff]" onClick={() => scrollToSection('projects')}>
              Projects
            </a>
          </li>
          <li className={`p-4 cursor-pointer ${click ? 'block' : 'hidden lg:block'}`}>
            <a className="text-white hover:text-[#00d8ff]" onClick={() => scrollToSection('team')}>
              Team
            </a>
          </li>
          <li className={`p-4 cursor-pointer ${click ? 'block' : 'hidden lg:block'}`}>
            <a className="text-white hover:text-[#00d8ff]" onClick={() => scrollToSection('contact')}>
              Contact Us
            </a>
          </li>
        </ul>
        <div
          onClick={handleClick}
          className="block lg:hidden mr-4 cursor-pointer"
        >
          {click ? (
            <AiOutlineClose className="text-black text-2xl" />
          ) : (
            <AiOutlineMenu className="text-black text-2xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;