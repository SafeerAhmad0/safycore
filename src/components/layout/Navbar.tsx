"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center transition-all duration-300 ${
          isScrolled ? 'justify-start h-16' : 'justify-center h-20'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/LogoMain.png"
                alt="SafyCore Logo"
                width={isScrolled ? 40 : 60}
                height={isScrolled ? 40 : 60}
                className="transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Only show when not scrolled */}
          {!isScrolled && (
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link
                  href="#pricing"
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Pricing
                </Link>
                <Link
                  href="#faqs"
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  FAQs
                </Link>
                <Link
                  href="#contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}

          {/* Mobile menu button - Only show when not scrolled */}
          {!isScrolled && (
            <div className="md:hidden ml-4">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu - Only show when not scrolled */}
      {isMenuOpen && !isScrolled && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 backdrop-blur-md border-t border-white/10">
            <Link
              href="/"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#pricing"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faqs"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-6 py-2 rounded-lg text-base font-medium mx-3 mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
