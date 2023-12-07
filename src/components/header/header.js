"use client";

import React, { useState, useEffect } from 'react';
import Logo from '../icons/logo';
import './header.css';
import ArrowDown from '../icons/arrow-down';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 50;
      setIsSticky(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`w-full header${isSticky ? ' sticky' : ''}`}>
      <div className="flex items-center">
      <Logo
          width={150}
          height={72}
          isSticky={isSticky}
        />
      </div>
      <div className="header-options">
        <div className="home-btn">HOME</div>
        <div className="flex items-center space-x-1">
          <div>SERVICE</div>
          <ArrowDown />
        </div>
        <div>INDUSTRY</div>
        <div>ABOUT</div>
      </div>
      <div className="contactus-btn">CONTACT US</div>
    </section>
  );
};

export default Header;
