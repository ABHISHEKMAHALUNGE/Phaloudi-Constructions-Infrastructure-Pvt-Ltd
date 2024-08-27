// File: src/components/AboutUsSection.jsx
import React from 'react';

function AboutUsSection() {
  return (
    <div className="flex flex-col md:flex-row p-4 max-w-screen-lg mx-auto">
      {/* Left Div: About Us Heading and Image */}
      <div className="flex-1 flex flex-col items-center md:items-start mb-4 md:mb-0">
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">About Us</h2>
        <img 
          src="https://via.placeholder.com/300" 
          alt="About Us" 
          className="w-full md:w-3/4 h-auto object-cover" 
        />
      </div>

      {/* Right Div: Text Content */}
      <div className="flex-1 flex items-center">
        <p className="text-gray-700">
          PCIPL is a leading engineering and construction firm committed to delivering excellence in every project. We strive to create infrastructure that supports our nation’s growth and development. Our dedicated team and innovative approach ensure that we meet the highest standards of quality and sustainability.
        </p>
      </div>
    </div>
  );
}

export default AboutUsSection;
