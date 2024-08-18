import React, { useState, useEffect } from 'react';

const images = [
  'https://cdn.pixabay.com/photo/2019/02/06/16/32/architect-3979490_1280.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/022/667/153/small/construction-concept-at-back-of-the-construction-worker-head-which-is-wearing-the-safety-helmet-and-checking-work-at-the-construction-site-non-existent-person-generative-ai-photo.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yXf-MYzk7B1fOIXgZYlXIyQrJcJFUZUc3ZXW9YD2y9lOFVc0qaPEDCW2n_SH1TKEaz0&usqp=CAU',
];

function Slideshow() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000); // Change image every 3 seconds
    return () => clearTimeout(timer);
  }, [current, length]);

  return (
    <div className="relative mt-4 overflow-hidden h-64" style = {{height : '500px' ,marginTop : 0}}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
