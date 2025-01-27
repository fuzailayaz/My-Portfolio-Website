'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto relative">
        {/* Logo aligned to the left */}
        <h1 className="text-3xl font-bold font-poppins">My Portfolio</h1>

        {/* Hamburger Menu */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`space-y-2 transform transition-all duration-300 ${
              isMenuOpen ? 'open' : ''
            }`}
          >
            {/* Top bar */}
            <span
              className={`block w-8 h-1 bg-white transition-all duration-300 ${
                isMenuOpen ? 'translate-y-1' : ''
              }`}
            ></span>
            {/* Middle bar */}
            <span
              className={`block w-8 h-1 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            {/* Bottom bar */}
            <span
              className={`block w-8 h-1 bg-white transition-all duration-300 ${
                isMenuOpen ? '-translate-y-1' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`md:flex md:space-x-6 ${
            isMenuOpen ? 'block' : 'hidden'
          } bg-blue-600 md:block font-poppins text-lg w-full mt-2 md:mt-0 md:ml-4 absolute top-full left-0 md:static md:w-auto md:flex-row`}
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)', // Position the menu right below the hamburger icon
            left: '0',
            width: 'auto', // Ensures the dropdown is not too wide
            zIndex: '999', // Ensure it appears on top of other content
          }}
        >
          <a href="#about" className="hover:text-gray-300 block py-2 px-4">About</a>
          <a href="#projects" className="hover:text-gray-300 block py-2 px-4">Projects</a>
          <a href="#contact" className="hover:text-gray-300 block py-2 px-4">Contact</a>
          <a href="https://github.com/fuzailayaz" className="hover:text-gray-300 block py-2 px-4">GitHub</a>
          <a href="https://www.linkedin.com/in/fuzailayaz/" className="hover:text-gray-300 block py-2 px-4">LinkedIn</a>
          <a href="mailto:mdfuzailayaz95@gmail.com" className="hover:text-gray-300 block py-2 px-4">Email</a>
        </nav>
      </div>
    </header>
  );
}
