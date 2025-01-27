'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo aligned to the left */}
        <h1 className="text-3xl font-bold font-poppins">My Portfolio</h1>

        {/* Navigation Menu for Desktop (Right Aligned) */}
        <nav
          className={`md:flex md:space-x-6 ml-auto ${isMenuOpen ? 'block' : 'hidden'} md:block font-poppins text-lg w-full mt-2 md:mt-0 md:w-auto md:ml-0 ml-4`}
        >
          <a href="#about" className="hover:text-gray-300 block py-2 px-4">About</a>
          <a href="#projects" className="hover:text-gray-300 block py-2 px-4">Projects</a>
          <a href="#contact" className="hover:text-gray-300 block py-2 px-4">Contact</a>
          <a href="https://github.com/fuzailayaz" className="hover:text-gray-300 block py-2 px-4">GitHub</a>
          <a href="https://www.linkedin.com/in/fuzailayaz/" className="hover:text-gray-300 block py-2 px-4">LinkedIn</a>
          <a href="mailto:mdfuzailayaz95@gmail.com" className="hover:text-gray-300 block py-2 px-4">Email</a>
        </nav>

        {/* Hamburger Menu (Visible only on mobile) */}
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
      </div>
    </header>
  );
}
