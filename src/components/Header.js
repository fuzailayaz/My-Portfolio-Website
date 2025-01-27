'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold font-poppins">My Portfolio</h1>

        {/* Hamburger Menu */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`space-y-2 transform transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          >
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </div>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block font-poppins text-lg`}
        >
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a href="https://github.com/fuzailayaz" className="hover:text-gray-300">GitHub</a>
          <a href="https://www.linkedin.com/in/fuzailayaz/" className="hover:text-gray-300">LinkedIn</a>
          <a href="mailto:mdfuzailayaz95@gmail.com" className="hover:text-gray-300">Email</a>
        </nav>
      </div>
    </header>
  );
}
