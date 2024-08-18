import React from 'react';

function Strengths() {
  const strengths = [
    'Innovative Solutions',
    'Highly Skilled Team',
    'Excellent Customer Support',
    'Cutting-edge Technology',
    'Proven Track Record',
    'Customer-centric Approach'
  ];

  return (
    <div className="p-8 bg-white">
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 font-sans">Our Strengths</h2>
      </div>
      <ul className="list-disc list-inside space-y-4">
        {strengths.map((strength, index) => (
          <li key={index} className="text-lg text-gray-700">{strength}</li>
        ))}
      </ul>
    </div>
  );
}

export default Strengths;
