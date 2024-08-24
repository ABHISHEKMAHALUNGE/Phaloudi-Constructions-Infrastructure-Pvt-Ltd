// import React, { useState } from 'react';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-xl">FALODI CONSTRUCTIONS</div>
        
//         {/* Hamburger Menu for Smaller Screens */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-300 hover:text-white focus:outline-none"
//           >
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>

//         {/* Menu Items for Larger Screens */}
//         <div className="hidden md:flex space-x-4">
//           <a href="#" className="text-gray-300 hover:text-white">COMPANY</a>
//           <a href="#" className="text-gray-300 hover:text-white">STRENGTHS</a>
//           <a href="#" className="text-gray-300 hover:text-white">PROJECTS</a>
//           <a href="#" className="text-gray-300 hover:text-white">PEOPLE</a>
//           <a href="#" className="text-gray-300 hover:text-white">MEDIA</a>
//           <a href="#" className="text-gray-300 hover:text-white">CONTACT US</a>
//         </div>
//       </div>

//       {/* Dropdown Menu for Smaller Screens */}
//       {isOpen && (
//         <div className="md:hidden">
//           <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">COMPANY</a>
//           <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">STRENGTHS</a>
//           <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">PROJECTS</a>
//           <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">PEOPLE</a>
//           <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">MEDIA</a>
//           <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">CONTACT US</a>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyCOMPANY</div>
        
        {/* Hamburger Menu for Smaller Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Menu Items for Larger Screens */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">COMPANY</a>
          <a href="#" className="text-gray-300 hover:text-white">STRENGTHS</a>
          <a href="#" className="text-gray-300 hover:text-white">PROJECTS</a>
          <a href="#" className="text-gray-300 hover:text-white">PEOPLE</a>
          <a href="#" className="text-gray-300 hover:text-white">MEDIA</a>
          <a href="#" className="text-gray-300 hover:text-white">CONTACT US</a>
        </div>
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">COMPANY</a>
          <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">STRENGTHS</a>
          <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">PROJECTS</a>
          <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">PEOPLE</a>
          <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">MEDIA</a>
          <a href="#" className="block text-gray-300 hover:text-white px-2 py-1">CONTACT US</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

