import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-lg font-semibold text-gray-700">
        <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          Home
        </li>
        <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          About
        </li>
        <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          Services
        </li>
        <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
