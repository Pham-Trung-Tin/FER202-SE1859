import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold text-indigo-600 tracking-wide"
          style={{ transform: "scale(1.2)" }} // Scale logo tăng nhẹ
        >
          MyBrand
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-700 text-lg font-medium">
          <li>
            <a href="#" className="hover:text-indigo-600 transition">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-600 transition">
              Sản phẩm
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-600 transition">
              Folder
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-600 transition">
              Liên hệ
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}
