import React, { useState, useEffect } from 'react';

const backgroundImages = [
  "https://www.whisperpower.com/content/uploads/2021/05/Generator_header_test.png",
  'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  'https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg?cs=srgb&dl=pexels-lennart-wittstock-94105-316681.jpg&fm=jpg',
  'https://img.freepik.com/free-vector/line-luxury-gradient-color-minimalist-style-wave_483537-3948.jpg?semt=ais_hybrid&w=740',
  'https://chatgpt.com/s/m_6885e110a1708191b066afe6ae105d1b'
];

export const BackgroundSlideshow: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const nextImageIndex = (currentImageIndex + 1) % backgroundImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 1); // 1s = must match your CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden h-screen w-screen">
      {/* Current Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform ${
          isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        }`}
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      />

      {/* Next Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform ${
          isTransitioning ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          backgroundImage: `url(${backgroundImages[nextImageIndex]})`,
        }}
      />

      {/* Optional: dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};
