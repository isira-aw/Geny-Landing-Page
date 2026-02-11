import React, { useState, useEffect } from 'react';

const backgroundImages = [
  "https://github.com/isira-aw/Geny-Landing-Page/blob/main/image/Industri%C3%ABle%20dieselgenerator%20en%20controlepaneel.jpg?raw=true",
  'https://github.com/isira-aw/Geny-Landing-Page/blob/main/image/Waterproof%20Enclosure%20with%20Dynamic%20Splash.png?raw=true',
  'https://github.com/isira-aw/Geny-Landing-Page/blob/main/image/Untitled%20778.png?raw=true',
  'https://github.com/isira-aw/Geny-Landing-Page/blob/main/image/Gray%20Junction%20Box%20on%20Dusty%20Ground.png?raw=true'
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
