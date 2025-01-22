"use client"

import Link from "next/link"

import { useState } from "react"
import { CartIcon } from "../app/components/cart-icon"
import { ProfileSidebar } from "../app/components/profile-sidebar"

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white dark:bg-red-300 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-4xl font-extrabold tracking-wide text-primary dark:text-white font-playfair hover:scale-105 transition-transform duration-200"
          >
            Media Mart
          </Link>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Products', 'About', 'Contact'].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="relative group text-lg font-bold text-secondary dark:text-gray-300 font-poppins transition-transform duration-200"
              >
                {item}
                {/* Underline Hover Effect */}
                <span
                  className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary dark:from-gray-100 dark:to-gray-400 transition-all duration-300 group-hover:w-full rounded"
                ></span>
              </Link>
            ))}
          </nav>

          {/* Icons and Toggle */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 md:p-3 border-2 border-gray-600 dark:border-gray-300 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-400 transition-transform transform hover:scale-110"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Cart Icon */}
            <CartIcon itemCount={2} />

            {/* Profile Icon */}
            <ProfileSidebar />

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform transform duration-200"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="mt-4 flex flex-col space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md md:hidden transition-all duration-300">
            {['Home', 'Products', 'About', 'Contact'].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-lg font-bold text-secondary dark:text-gray-300 font-poppins hover:text-primary dark:hover:text-white transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {item}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
