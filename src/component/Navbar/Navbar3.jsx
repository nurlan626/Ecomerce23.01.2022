import React, { useState, useRef, useEffect } from 'react';
 import { FaBars } from 'react-icons/fa';
import "./Navbar3.scss"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <div>Collection</div>
          <ul className='links' ref={linksRef}>
            
            <li>Nurllan</li>
            <li>Nurllan</li>
            <li>Nurllan</li>
            <li>Nurllan</li>
            <li>Nurllan</li>
          </ul>
          <div>
            buttons
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;