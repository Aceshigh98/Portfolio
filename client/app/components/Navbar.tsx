'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

//Components
import NavLink from './ui/Home/NavLink';
import Logo from './ui/Home/NavLogoModel';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


const Navbar = () => {
  // State to check if user has scrolled
  const [scrolled, setScrolled] = useState(false);
  const [toggleMode, setToggleMode] = useState(false);

  //crete an object to store the sections
  const sections = {
    home: ['home', 'Home'],
    about:['about', 'About'],
    portfolio: ['portfolio', 'Portfolio'],
    skills: ['skills', 'Skills'],
    contact:  ['contact', 'Contact']
  };

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //Handle toggle mode
  const handleToggleMode = () => {
    setToggleMode(!toggleMode);
    if (toggleMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };



  return (
    <motion.nav
      className={`flex flex-row items-center justify-center space-x-5 fixed top-0 left-0 right-0 z-30 transition-all duration-300${scrolled ? ' w-[40%] 2xl:w-[65%] h-[100px] lg:space-x-2 lg:h-[50px] mt-[50px] 2xl:text-[10px] mx-auto rounded-full backdrop-filter backdrop-blur-lg bg-opacity-10 bg-slate-100' : ' top-[0px] w-full h-[100px] lg:h-[200px] lg:pt-10 md:text-[10px]' }`}
    >
      <div className={`flex flex-row items-center justify-between rounded-full h-20 w-20 overflow-hidden z-30 ${scrolled ?`md:h-0 md:w-0`: `h-20 w-20` }`}>
        <Logo/>
      </div>
      <div className="space-x-10 z-30 text-white lg:space-x-5">
        {Object.entries(sections).map(([key, value]) => (
          <NavLink key={key} page={value[0]} name={value[1]}/>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center space-x-5 z-30">
        <button onClick={handleToggleMode} className="text-white">
          {toggleMode ? <MdDarkMode className="w-8 h-8" /> : <MdLightMode className="w-8 h-8" />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
