import React from 'react';

const images = [
  {
    url: 'https://img.freepik.com/free-vector/iot-concept-isometric-icons-cycle-composition_1284-11487.jpg',
    description: 'Rugged outdoor IoT deployment',
  },
  {
    url: 'https://img.freepik.com/free-vector/iot-concept-isometric-icons-cycle-composition_1284-11487.jpg',
    description: 'Live dashboard in action',
  },
  {
    url: 'https://img.freepik.com/free-vector/iot-concept-isometric-icons-cycle-composition_1284-11487.jpg',
    description: 'Installation on industrial generators',
  },
  {
    url: 'https://img.freepik.com/free-vector/iot-concept-isometric-icons-cycle-composition_1284-11487.jpg',
    description: 'AI-powered anomaly detection visuals',
  },
  {
    url: 'https://img.freepik.com/free-vector/iot-concept-isometric-icons-cycle-composition_1284-11487.jpg',
    description: 'Device and dashboard side-by-side',
  },
];

export const Gallery: React.FC = () => {
  return (
    <div className="space-y-6 animate-slide-in">
      <h2 className="text-4xl font-bold mb-4 font-mono">Gallery</h2>
      <div className="flex flex-col space-y-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md group bg-[#111] transition-transform transform hover:scale-105"
          >
            <img
              src={item.url}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-4 text-white text-sm">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};