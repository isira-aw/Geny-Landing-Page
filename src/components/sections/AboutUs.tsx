import React from 'react';
import { Users, Target, Award } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="space-y-6 animate-slide-in">
      <div className="flex items-center space-x-3 mb-6">
        <Users className="w-8 h-8 text-blue-300" />
        <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
      </div>
      
      <p className="text-lg text-white/90 leading-relaxed">
        We are a forward-thinking creative studio dedicated to pushing the boundaries 
        of digital experiences and visual storytelling.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Target className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-white mb-1">Our Mission</h3>
            <p className="text-white/80 text-sm">To create meaningful connections through innovative design and technology.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Award className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-white mb-1">Our Values</h3>
            <p className="text-white/80 text-sm">Excellence, creativity, and collaboration drive everything we do.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white/10 rounded-lg p-4 mt-6">
        <p className="text-white/90 text-sm italic">
          "Innovation distinguishes between a leader and a follower."
        </p>
      </div>
      
      <button className="mt-8 bg-blue-600/80 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm">
        Learn More
      </button>
    </div>
  );
};