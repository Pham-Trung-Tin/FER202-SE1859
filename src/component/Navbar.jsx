import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-indigo-600">MyBrand</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li><a href="#" className="hover:text-indigo-600">Trang chủ</a></li>
          <li><a href="#" className="hover:text-indigo-600">Sản phẩm</a></li>
          <li><a href="#" className="hover:text-indigo-600">Folder</a></li>
          <li><a href="#" className="hover:text-indigo-600">Liên hệ</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}
