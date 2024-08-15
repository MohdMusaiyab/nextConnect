import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
    
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-3xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to our application! We are committed to providing you with the best services possible. Our platform allows users to manage documents, create dynamic email templates, and send personalized emails efficiently.
        </p>
        <p className="text-lg mb-6">
          With our intuitive interface, users can easily upload their resumes and cover letters, design customized email templates, and manage their email lists. We aim to streamline your workflow and enhance your productivity.
        </p>
        <p className="text-lg mb-6">
          Our team is dedicated to continuous improvement and ensuring that your experience with us is smooth and satisfying. Thank you for choosing our application. If you have any questions or feedback, feel free to reach out to us.
        </p>
        <div className="text-center">
          <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
