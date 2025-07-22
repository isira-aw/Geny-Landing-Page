import React from 'react';
import { Camera, Image, Palette } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <div className="space-y-6 animate-slide-in">
      <div className="flex items-center space-x-3 mb-6">
        <Camera className="w-8 h-8 text-blue-300" />
        <h1 className="text-3xl md:text-4xl font-bold">Gallery</h1>
      </div>
      
      <p className="text-lg text-white/90 leading-relaxed">
        Explore our curated collection of stunning visuals and creative works that showcase 
        the intersection of art, technology, and innovation.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Image className="w-5 h-5 text-blue-300" />
          <span className="text-white/80">Digital Art Collections</span>
        </div>
        <div className="flex items-center space-x-3">
          <Palette className="w-5 h-5 text-blue-300" />
          <span className="text-white/80">Creative Showcases</span>
        </div>
        <div className="flex items-center space-x-3">
          <Camera className="w-5 h-5 text-blue-300" />
          <span className="text-white/80">Photography Portfolio</span>
        </div>
      </div>
      
      <button className="mt-8 bg-blue-600/80 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm">
        View Full Gallery
      </button>
    </div>
  );
};