import React from 'react';
// import Image from 'next/image';
import NavBar from './NavBar';
import Login from './Login';

const Header = () => {
  return (
    <header className="shadow-md py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid" // Replace with your logo path
            alt="Company Logo"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <h1 className="text-xl md:text-2xl font-bold ml-2 md:ml-4 text-gray-800">
            Your Company
          </h1>
        </div>

        {/* Navigation Bar */}
        <nav className="mb-4 md:mb-0">
          <NavBar />
        </nav>

        {/* Login Button */}
        <div className="flex items-center">
          <Login />
        </div>
      </div>
    </header>
  );
};

export default Header;
