import React from 'react';
// import { Users, Target, Award } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="space-y-6 animate-slide-in">
      <div className="flex items-center space-x-3 mb-6">
        {/* <Users className="w-8 h-8 text-blue-300" /> */}
        <h2 className="text-4xl font-bold mb-4 font-mono">About Us</h2>
      </div>
      
      <p className="text-lg text-white/90 leading-relaxed">
        We’re a team of engineers and innovators passionate about making power systems smarter and more efficient. Our journey began with a simple idea—what if monitoring your generator was as easy as checking your phone? Today, with our custom IoT hardware, powerful AI-backed software, and customer-first approach, we’ve made that vision a reality.We believe in quality, transparency, and cutting-edge technology—and we’re proud to offer a system that’s as robust as it is intelligent.
      </p>
    
    </div>
  );
};