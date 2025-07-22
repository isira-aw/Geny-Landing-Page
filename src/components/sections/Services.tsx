import React from 'react';
import { Zap, Smartphone, Globe, Brush } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="space-y-6 animate-slide-in">
      <div className="flex items-center space-x-3 mb-6">
        <Zap className="w-8 h-8 text-blue-300" />
        <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
      </div>
      
      <p className="text-lg text-white/90 leading-relaxed">
        We offer comprehensive digital solutions tailored to elevate your brand 
        and create exceptional user experiences.
      </p>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors duration-300">
          <div className="flex items-center space-x-3 mb-2">
            <Globe className="w-5 h-5 text-blue-300" />
            <h3 className="font-semibold text-white">Web Development</h3>
          </div>
          <p className="text-white/80 text-sm">Modern, responsive websites built with cutting-edge technology.</p>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors duration-300">
          <div className="flex items-center space-x-3 mb-2">
            <Smartphone className="w-5 h-5 text-blue-300" />
            <h3 className="font-semibold text-white">Mobile Apps</h3>
          </div>
          <p className="text-white/80 text-sm">Native and cross-platform mobile applications.</p>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors duration-300">
          <div className="flex items-center space-x-3 mb-2">
            <Brush className="w-5 h-5 text-blue-300" />
            <h3 className="font-semibold text-white">UI/UX Design</h3>
          </div>
          <p className="text-white/80 text-sm">Beautiful, intuitive designs that users love.</p>
        </div>
      </div>
      
      <button className="mt-8 bg-blue-600/80 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm">
        Get Started
      </button>
    </div>
  );
};