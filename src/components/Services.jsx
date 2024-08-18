import React from 'react';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'Expert services in building homes, from foundations to finishes.',
      icon: 'https://via.placeholder.com/100x100'
    },
    {
      id: 2,
      title: 'Commercial Construction',
      description: 'Comprehensive construction solutions for commercial buildings and office spaces.',
      icon: 'https://via.placeholder.com/100x100'
    },
    {
      id: 3,
      title: 'Renovations & Remodels',
      description: 'High-quality renovations and remodeling for homes and businesses.',
      icon: 'https://via.placeholder.com/100x100'
    },
    {
      id: 4,
      title: 'Project Management',
      description: 'Professional management of construction projects from start to finish.',
      icon: 'https://via.placeholder.com/100x100'
    },
    {
      id: 5,
      title: 'Design & Planning',
      description: 'Architectural and engineering design services to plan your construction projects.',
      icon: 'https://via.placeholder.com/100x100'
    },
    {
      id: 6,
      title: 'Consultation Services',
      description: 'Expert advice and consultation for all your construction needs.',
      icon: 'https://via.placeholder.com/100x100'
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 font-sans">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={service.icon} alt={service.title} className="w-16 h-16 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
