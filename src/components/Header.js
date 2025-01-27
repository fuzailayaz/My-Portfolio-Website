'use client'
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu

  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold px-4 py-2 rounded-lg">
          My Portfolio
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`h-1 w-6 bg-white my-1 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`h-1 w-6 bg-white my-1 transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <div className={`h-1 w-6 bg-white my-1 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Navigation Links */}
        <nav
          className={`lg:flex space-x-6 absolute lg:static top-16 left-0 w-full bg-blue-500 lg:bg-transparent lg:w-auto lg:p-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-white">
            <li>
              <a href="#about" className="block px-4 py-2 hover:bg-blue-600 rounded-md">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="block px-4 py-2 hover:bg-blue-600 rounded-md">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="block px-4 py-2 hover:bg-blue-600 rounded-md">
                Contact
              </a>
            </li>
            <li>
              <a href="#github" className="block px-4 py-2 hover:bg-blue-600 rounded-md">
                GitHub
              </a>
            </li>
            <li>
              <a href="#linkedin" className="block px-4 py-2 hover:bg-blue-600 rounded-md">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#email" className="block px-4 py-2 hover:bg-blue-600 rounded-md">
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
