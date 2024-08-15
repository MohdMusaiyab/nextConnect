import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-lg font-semibold text-gray-700">
        <Link  href="/" className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          About
        </Link>
        <Link href="/services" className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          Services
        </Link>
        <Link href="/contact" className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
