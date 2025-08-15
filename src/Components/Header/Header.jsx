import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import './Header.css';
import Img from '../../Assets/logo2.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Works', href: '/illustrations' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Now', href: '#contact' },
  ];

  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo on the left */}
        <div className="logo-container">
          <img 
            src={Img}
            alt="Artist Logo" 
            className="logo"
          />
        </div>

        {/* Hamburger/Close menu button on the right */}
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FaTimes className="menu-icon" />
          ) : (
            <HiMiniBars3BottomRight className="menu-icon" />
          )}
        </button>

        {/* Fullscreen menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fullscreen-menu"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
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
                        onClick={() => setIsMenuOpen(false)}
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