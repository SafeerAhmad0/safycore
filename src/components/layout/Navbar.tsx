"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation';

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
    <motion.nav
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      animate={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          animate={{
            height: isScrolled ? '64px' : '80px',
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between"
        >
          {/* Logo - ALWAYS VISIBLE */}
          <motion.div
            animate={{
              scale: isScrolled ? 0.67 : 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/LogoMain.png"
                alt="SafyCore Logo"
                width={60}
                height={60}
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Only show when not scrolled */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block absolute left-1/2 transform -translate-x-1/2"
              >
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Get Started Button - ALWAYS VISIBLE - Desktop only */}
          <motion.div
            animate={{
              scale: isScrolled ? 0.85 : 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <BackgroundGradientAnimation
                gradientBackgroundStart="rgb(150, 180, 220)"
                gradientBackgroundEnd="rgb(180, 200, 240)"
                firstColor="100, 150, 255"
                secondColor="180, 120, 255"
                thirdColor="120, 200, 255"
                fourthColor="255, 150, 200"
                fifthColor="200, 180, 100"
                pointerColor="150, 100, 255"
                containerClassName="!absolute !h-full !w-full"
              />
            </div>
            <Link
              href="#pricing"
              className="relative z-10 block px-6 py-2 rounded-lg text-sm font-bold text-white hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile menu button - ALWAYS VISIBLE on mobile, hidden on desktop */}
          <motion.div
            animate={{
              scale: isScrolled ? 0.85 : 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:hidden flex items-center gap-3"
          >
            {/* Get Started Button for Mobile */}
            <div className="relative">
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <BackgroundGradientAnimation
                  gradientBackgroundStart="rgb(150, 180, 220)"
                  gradientBackgroundEnd="rgb(180, 200, 240)"
                  firstColor="100, 150, 255"
                  secondColor="180, 120, 255"
                  thirdColor="120, 200, 255"
                  fourthColor="255, 150, 200"
                  fifthColor="200, 180, 100"
                  pointerColor="150, 100, 255"
                  containerClassName="!absolute !h-full !w-full"
                />
              </div>
              <Link
                href="#pricing"
                className="relative z-10 block px-4 py-1.5 rounded-lg text-xs font-bold text-white"
              >
                Get Started
              </Link>
            </div>

            {/* Hamburger Menu */}
            {!isScrolled && (
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile menu - Only show when not scrolled */}
      <AnimatePresence>
        {isMenuOpen && !isScrolled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
