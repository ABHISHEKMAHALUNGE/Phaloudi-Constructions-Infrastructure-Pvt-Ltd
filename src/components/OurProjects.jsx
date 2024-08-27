// import React from 'react';

// function OurProjects() {
//   const projects = [
//     { id: 1, title: 'Project 1', description: 'Description of Project 1', image: 'https://via.placeholder.com/400x300' },
//     { id: 2, title: 'Project 2', description: 'Description of Project 2', image: 'https://via.placeholder.com/400x300/ff7f7f' },
//     { id: 3, title: 'Project 3', description: 'Description of Project 3', image: 'https://via.placeholder.com/400x300/7f7fff' },
//     { id: 4, title: 'Project 4', description: 'Description of Project 4', image: 'https://via.placeholder.com/400x300/7fff7f' },
//     { id: 5, title: 'Project 5', description: 'Description of Project 5', image: 'https://via.placeholder.com/400x300/ffff7f' },
//     { id: 6, title: 'Project 6', description: 'Description of Project 6', image: 'https://via.placeholder.com/400x300/ff7fff' },
//   ];

//   return (
//     <div className="p-8">
//       {/* <h2 className="text-2xl font-bold mb-6">Our Projects</h2> */}
//       <h2 className="text-3xl font-extrabold text-gray-800 mr-8 font-sans">Our Projects</h2>

//       <div className="flex flex-wrap gap-6">
//         {projects.map(project => (
//           <div key={project.id} className="flex-1 bg-gray-200 p-6 rounded-lg shadow-lg max-w-xs">
//             <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default OurProjects;
// import React from 'react';

// function OurProjects() {
//   // const projects = [
//   //   { id: 1, title: 'Project 1', description: 'Description of Project 1', image: 'https://via.placeholder.com/400x300' },
//   //   { id: 2, title: 'Project 2', description: 'Description of Project 2', image: 'https://via.placeholder.com/400x300/ff7f7f' },
//   //   { id: 3, title: 'Project 3', description: 'Description of Project 3', image: 'https://via.placeholder.com/400x300/7f7fff' },
//   //   { id: 4, title: 'Project 4', description: 'Description of Project 4', image: 'https://via.placeholder.com/400x300/7fff7f' },
//   //   { id: 5, title: 'Project 5', description: 'Description of Project 5', image: 'https://via.placeholder.com/400x300/ffff7f' },
//   //   { id: 6, title: 'Project 6', description: 'Description of Project 6', image: 'https://via.placeholder.com/400x300/ff7fff' },
//   // ];
  
//     const projects = [
//       {"name": "Tem Project - Unit 1", "value": 59.69},
//       {"name": "Dindori Medium Irrigation Project", "value": 79.76},
//       {"name": "Banda Micro Irrigation Project", "value": 1296.71},
//       {"name": "Hanota Micro Irrigation Project", "value": 584.67},
//       {"name": "Jhinna Micro Irrigation Project", "value": 26.89},
//       {"name": "Mohanpura (Left Bank Canal)", "value": 216.88},
//       {"name": "Mohanpura (Right Bank Canal)", "value": 82.56},
//       {"name": "Parwati Lift Irrigation Project (Phase 3 & 4)", "value": 781.20},
//       {"name": "Sleemnabad Tunnel Project", "value": 35.95},
//       {"name": "Vijayraghorarh Branch Canal (00 KM to 57.17 KM)", "value": 224.49},
//       {"name": "REWA Branch Canal (24 KM to 33 KM)", "value": 256.49},
//       {"name": "REWA Branch Canal (33 KM to 39 KM)", "value": 195.99},
//       {"name": "Construction of Upper Narmada", "value": 179.76},
//       {"name": "Nagod Satna Branch Canal", "value": 312.88},
//       {"name": "Rampura Manasa Construction", "value": 192.03},
//       {"name": "Jhirniya Micro Lift Irrigation", "value": 315.17},
//       {"name": "Duri Sagar Medium Project", "value": 33.69},
//       {"name": "Tem Unit-2 Project", "value": 151.28},
//       {"name": "Semariya Micro Irrigation Project", "value": 149.88},
//       {"name": "Murki Hose Irrigation Project", "value": 48.42},
//       {"name": "Loni Micro Irrigation", "value": 27.37},
//       {"name": "Hirwar Micro Irrigation", "value": 98.21},
//       {"name": "Parkul Medium Irrigation", "value": 22.80},
//       {"name": "Pipari Micro Lift Irrigation", "value": 332.67},
//       {"name": "Khargone Lift Irrigation", "value": 81.88},
//       {"name": "Mahi Project (Agreement No.11)", "value": 3.8},
//       {"name": "Mahi Project (Agreement No.19)", "value": 22.49},
//       {"name": "Mahi Project (Agreement No.14)", "value": 5.324},
//       {"name": "Kachhal Tank, Shajapur", "value": null},
//       {"name": "Bijnakhedi Tank, Shajapur", "value": null},
//       {"name": "Datuni Canal", "value": 45.63},
//       {"name": "BAH River Project", "value": 25.29},
//       {"name": "Sagad Project", "value": 27.48},
//       {"name": "Bhanpura Main Canal", "value": 72.24},
//       {"name": "Semri Canal System", "value": 22.52},
//       {"name": "Semri Medium Tank", "value": 10.48},
//       {"name": "Rajghat Dam", "value": 38.84},
//       {"name": "Mohnpura Micro Irrigation Project", "value": 38.89}
//     ]
  
  

//   return (
//     <div className="p-8">
//       <div className="flex items-center mb-6">
//         <h2 className="text-3xl font-extrabold text-gray-800 font-sans">Our Projects</h2>
//         <div className="flex-grow border-t border-gray-300 ml-8"></div>
//       </div>
//       <div className="flex flex-wrap gap-6">
//         {projects.map(project => (
//           <div key={project.id} className="flex-1 bg-gray-200 p-6 rounded-lg shadow-lg max-w-xs">
//             <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default OurProjects;
import React, { useState } from 'react';

function OurProjects() {
  const projects = [
    {"name": "Tem Project - Unit 1", "value": 59.69},
    {"name": "Dindori Medium Irrigation Project", "value": 79.76},
    {"name": "Banda Micro Irrigation Project", "value": 1296.71},
    {"name": "Hanota Micro Irrigation Project", "value": 584.67},
    {"name": "Jhinna Micro Irrigation Project", "value": 26.89},
    {"name": "Mohanpura (Left Bank Canal)", "value": 216.88},
    {"name": "Mohanpura (Right Bank Canal)", "value": 82.56},
    {"name": "Parwati Lift Irrigation Project (Phase 3 & 4)", "value": 781.20},
    {"name": "Sleemnabad Tunnel Project", "value": 35.95},
    {"name": "Vijayraghorarh Branch Canal (00 KM to 57.17 KM)", "value": 224.49},
    {"name": "REWA Branch Canal (24 KM to 33 KM)", "value": 256.49},
    {"name": "REWA Branch Canal (33 KM to 39 KM)", "value": 195.99},
    {"name": "Construction of Upper Narmada", "value": 179.76},
    {"name": "Nagod Satna Branch Canal", "value": 312.88},
    {"name": "Rampura Manasa Construction", "value": 192.03},
    {"name": "Jhirniya Micro Lift Irrigation", "value": 315.17},
    {"name": "Duri Sagar Medium Project", "value": 33.69},
    {"name": "Tem Unit-2 Project", "value": 151.28},
    {"name": "Semariya Micro Irrigation Project", "value": 149.88},
    {"name": "Murki Hose Irrigation Project", "value": 48.42},
    {"name": "Loni Micro Irrigation", "value": 27.37},
    {"name": "Hirwar Micro Irrigation", "value": 98.21},
    {"name": "Parkul Medium Irrigation", "value": 22.80},
    {"name": "Pipari Micro Lift Irrigation", "value": 332.67},
    {"name": "Khargone Lift Irrigation", "value": 81.88},
    {"name": "Mahi Project (Agreement No.11)", "value": 3.8},
    {"name": "Mahi Project (Agreement No.19)", "value": 22.49},
    {"name": "Mahi Project (Agreement No.14)", "value": 5.324},
    {"name": "Kachhal Tank, Shajapur", "value": null},
    {"name": "Bijnakhedi Tank, Shajapur", "value": null},
    {"name": "Datuni Canal", "value": 45.63},
    {"name": "BAH River Project", "value": 25.29},
    {"name": "Sagad Project", "value": 27.48},
    {"name": "Bhanpura Main Canal", "value": 72.24},
    {"name": "Semri Canal System", "value": 22.52},
    {"name": "Semri Medium Tank", "value": 10.48},
    {"name": "Rajghat Dam", "value": 38.84},
    {"name": "Mohnpura Micro Irrigation Project", "value": 38.89}
  ];

  const projectsPerRow = 5;
  const [visibleRows, setVisibleRows] = useState(2);

  const handleShowMore = () => {
    setVisibleRows(prevRows => prevRows + 1);
  };

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 font-sans">Our Projects</h2>
        <div className="flex-grow border-t border-gray-300 ml-8"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {projects.slice(0, visibleRows * projectsPerRow).map((project, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <img
              src={`https://via.placeholder.com/400x300?text=${project.name}`}
              alt={project.name}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-4">Value: {project.value ? `${project.value} million` : 'N/A'}</p>
            <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              See More
            </button>
          </div>
        ))}
      </div>
      {visibleRows * projectsPerRow < projects.length && (
        <div className="mt-6 flex justify-center">
          <button 
            onClick={handleShowMore} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Show More Projects
          </button>
        </div>
      )}
    </div>
  );
}

export default OurProjects;



