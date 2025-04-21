"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path using Next.js hook

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") {
      return true;
    }
    if (path !== "/" && pathname?.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="bg-white">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-white shadow-md z-50">
          <div className="text-2xl font-bold text-black">
            <Link href="/" className="hover:text-blue-500">
              Portfolio
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700">
            <li>
              <Link 
                href="/" 
                className={`hover:text-blue-500 ${isActive('/') ? 'text-blue-600 font-medium' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`hover:text-blue-500 ${isActive('/about') ? 'text-blue-600 font-medium' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className={`hover:text-blue-500 ${isActive('/services') ? 'text-blue-600 font-medium' : ''}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/project" 
                className={`hover:text-blue-500 ${isActive('/project') ? 'text-blue-600 font-medium' : ''}`}
              >
                Project
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`hover:text-blue-500 ${isActive('/contact') ? 'text-blue-600 font-medium' : ''}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className={`hover:text-blue-500 ${isActive('/blog') ? 'text-blue-600 font-medium' : ''}`}
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Download Button */}
          <Link
            href="#"
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Download CV
          </Link>

          {/* Hamburger Icon */}
          <button 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu (Hidden by Default) */}
        <div
          id="mobileMenu"
          className={`${
            mobileMenuOpen ? "" : "hidden"
          } md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 overflow-y-auto pt-20 pb-6 px-6`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-gray-800"
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-6 text-gray-700 text-center">
            <li>
              <Link
                href="/"
                className={`block text-xl py-2 hover:text-blue-500 ${
                  isActive('/') ? 'text-blue-600 font-medium' : ''
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block text-xl py-2 hover:text-blue-500 ${
                  isActive('/about') ? 'text-blue-600 font-medium' : ''
                }`}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block text-xl py-2 hover:text-blue-500 ${
                  isActive('/services') ? 'text-blue-600 font-medium' : ''
                }`}
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className={`block text-xl py-2 hover:text-blue-500 ${
                  isActive('/project') ? 'text-blue-600 font-medium' : ''
                }`}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block text-xl py-2 hover:text-blue-500 ${
                  isActive('/contact') ? 'text-blue-600 font-medium' : ''
                }`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block text-xl py-2 hover:text-blue-500 ${
                  isActive('/blog') ? 'text-blue-600 font-medium' : ''
                }`}
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li className="pt-4">
              <Link
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md w-full hover:bg-blue-700 transition-colors"
                onClick={toggleMenu}
              >
                Download CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;