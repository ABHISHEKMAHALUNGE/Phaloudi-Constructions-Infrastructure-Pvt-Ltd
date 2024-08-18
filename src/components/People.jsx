import React from 'react';

function People() {
  const people = [
    { id: 1, name: 'Alice Johnson', role: 'Project Manager', image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Bob Smith', role: 'Lead Developer', image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Charlie Brown', role: 'Designer', image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Diana Ross', role: 'Marketing Specialist', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Eva Green', role: 'Quality Analyst', image: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Frank Miller', role: 'Support Engineer', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 font-sans">Meet the Team</h2>
      </div>
      <div className="flex flex-wrap gap-6">
        {people.map(person => (
          <div key={person.id} className="flex-1 bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <img src={person.image} alt={person.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">{person.name}</h3>
            <p className="text-center text-gray-600">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;
