'use client';

import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const AboutModel = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // This will only run on the client side
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set the initial window width
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth >= 1000 && (
        <div className='h-full w-full'>
          <Spline scene="https://prod.spline.design/QPubjOXMz2XgwPkY/scene.splinecode" />
        </div>
      )}
    </>
  );
};

export default AboutModel;



