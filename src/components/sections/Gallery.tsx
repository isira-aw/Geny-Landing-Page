import React from 'react';

const images = [
  {
    url: 'https://i.pinimg.com/736x/3a/51/af/3a51af1c0b64d4cca860cf6b0453b91b.jpg',
    description: 'Rugged outdoor IoT deployment',
  },
  {
    url: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    description: 'Live dashboard in action',
  },
  {
    url: 'https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg?cs=srgb&dl=pexels-lennart-wittstock-94105-316681.jpg&fm=jpg',
    description: 'Installation on industrial generators',
  },
  {
    url: 'https://img.freepik.com/free-vector/line-luxury-gradient-color-minimalist-style-wave_483537-3948.jpg?semt=ais_hybrid&w=740',
    description: 'AI-powered anomaly detection visuals',
  },
  {
    url: 'https://i.pinimg.com/736x/23/c3/3e/23c33e3c187499eaf1341dffff5c285c.jpg',
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