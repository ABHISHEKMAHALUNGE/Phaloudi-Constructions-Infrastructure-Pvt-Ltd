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
import React from 'react';

function OurProjects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1', image: 'https://via.placeholder.com/400x300' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', image: 'https://via.placeholder.com/400x300/ff7f7f' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', image: 'https://via.placeholder.com/400x300/7f7fff' },
    { id: 4, title: 'Project 4', description: 'Description of Project 4', image: 'https://via.placeholder.com/400x300/7fff7f' },
    { id: 5, title: 'Project 5', description: 'Description of Project 5', image: 'https://via.placeholder.com/400x300/ffff7f' },
    { id: 6, title: 'Project 6', description: 'Description of Project 6', image: 'https://via.placeholder.com/400x300/ff7fff' },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 font-sans">Our Projects</h2>
        <div className="flex-grow border-t border-gray-300 ml-8"></div>
      </div>
      <div className="flex flex-wrap gap-6">
        {projects.map(project => (
          <div key={project.id} className="flex-1 bg-gray-200 p-6 rounded-lg shadow-lg max-w-xs">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProjects;
