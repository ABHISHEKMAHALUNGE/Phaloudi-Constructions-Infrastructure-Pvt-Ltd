import React from 'react';

function Media() {
  const mediaItems = [
    { id: 1, src: 'https://via.placeholder.com/300x200', alt: 'Media 1' },
    { id: 2, src: 'https://via.placeholder.com/300x200/ff7f7f', alt: 'Media 2' },
    { id: 3, src: 'https://via.placeholder.com/300x200/7f7fff', alt: 'Media 3' },
    { id: 4, src: 'https://via.placeholder.com/300x200/7fff7f', alt: 'Media 4' },
    { id: 5, src: 'https://via.placeholder.com/300x200/ffff7f', alt: 'Media 5' },
    { id: 6, src: 'https://via.placeholder.com/300x200/ff7fff', alt: 'Media 6' },
  ];

  return (
    <div className="p-8 bg-white">
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 font-sans">Media</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaItems.map(media => (
          <div key={media.id} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img src={media.src} alt={media.alt} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Media;
