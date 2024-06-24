'use client';

import React, { useState, useEffect } from 'react';
import Logo from './ui/Home/NavLogoModel';
import { motion } from 'framer-motion';

//Components
import NavLink from './ui/Home/NavLink';


const Navbar = () => {
  // State to check if user has scrolled
  const [scrolled, setScrolled] = useState(false);

  //crete an object to store the sections
  const sections = {
    home: ['home', 'Home'],
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

  return (
    <motion.nav
      className={`flex flex-row items-center justify-center space-x-10 fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${scrolled ? 'w-[35%] md:w-[75%] h-[100px] md:space-x-2 md:h-[50px] mt-[50px] md:text-[10px] mx-auto rounded-full backdrop-filter backdrop-blur-lg bg-opacity-10 bg-slate-100' : ' top-[0px] md:top-[50px] w-[100%] h-[100px] mx-auto md:text-[10px]' }`}
    >
      <div className={`flex flex-row items-center justify-between rounded-full h-20 w-20 overflow-hidden z-30 ${scrolled ?`md:h-0 md:w-0`: `h-20 w-20` }`}>
        <Logo/>
      </div>
      <div className="space-x-10 z-30 text-white">
        {Object.entries(sections).map(([key, value]) => (
          <NavLink key={key} page={value[0]} name={value[1]}/>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
