import React, { useState, useEffect } from 'react';

import generatorImg from '../assets/images/Industriële dieselgenerator en controlepaneel.jpg';
import waterproofImg from '../assets/images/Waterproof Enclosure with Dynamic Splash.png';
import untitledImg from '../assets/images/Untitled 778.png';
import junctionBoxImg from '../assets/images/Gray Junction Box on Dusty Ground.png';

const backgroundImages = [
  generatorImg,
  waterproofImg,
  untitledImg,
  junctionBoxImg
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
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform ${isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      />

      {/* Next Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform ${isTransitioning ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
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
