import React from 'react';

const services = [
  {
    title: 'Document Management',
    description: 'Easily upload, manage, and organize your documents such as resumes and cover letters.',
    icon: '📄',
  },
  {
    title: 'Dynamic Email Templates',
    description: 'Create customizable email templates with dynamic content for personalized communication.',
    icon: '✉️',
  },
  {
    title: 'Email List Management',
    description: 'Manage your email lists efficiently and send personalized emails to multiple recipients.',
    icon: '📋',
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-2 text-center">{service.title}</h2>
              <p className="text-lg text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
