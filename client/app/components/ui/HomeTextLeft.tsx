"use client"

import React from 'react';
import { Button } from './BorderButton';

const HomeTextLeft = () => {

  const page = 'contact';

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
    }
  };


  return (
    <div className='w-fit h-fit text-center items-center z-10 lg:justify-center  lg:flex lg:flex-col lg:mx-auto lg:w-full lg:text-sm'>
          <h1>
            Hey There,
            <br />
            <span>I'm Brannon</span>
          </h1>
          <Button
            borderRadius="1rem"
            className="bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased"
            borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
            containerClassName="bg-transparent relative text-lg h-[50px] w-40 p-[2px] overflow-hidden mt-4"
            href={`#${page}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(page);
            }}
          >
            Let's Connect
          </Button>
    </div>
  );
};

export default HomeTextLeft;
