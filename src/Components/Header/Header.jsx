// Header.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import './Header.css';
import Img from '../../Assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const handleBookNow = (e) => {
    e.preventDefault();
    // fire the event
    window.dispatchEvent(new CustomEvent('open-cta'));
    // close the menu if open
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Works', href: '/illustrations' },
    { name: 'Contact', href: '/contact' },
    // href can be "#" since we’re intercepting click
    { name: 'Book Now', href: '#' },
  ];

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img src={Img} alt="Artist Logo" className="logo" />
        </div>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes className="menu-icon" /> : <HiMiniBars3BottomRight className="menu-icon" />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fullscreen-menu"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.3 }}>
                <ul className="nav-links">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.name === 'Book Now') {
                            handleBookNow(e);
                          } else {
                            setIsMenuOpen(false);
                          }
                        }}
                        className="nav-link"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
