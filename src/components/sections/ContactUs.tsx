import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactUs: React.FC = () => {
  return (
    <div className="space-y-6 animate-slide-in">
      <div className="flex items-center space-x-3 mb-6">
        {/* <Mail className="w-8 h-8 text-blue-300" /> */}
        <h2 className="text-4xl font-bold mb-4 font-mono">Contact Us</h2>
      </div>
      
      <p className="text-lg text-white/90 leading-relaxed">
        Discover how our IoT device can elevate your next project,reach out to us for more details and let's create something amazing together!
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-blue-300" />
          <span className="text-white/90">Isira@.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-blue-300" />
          <span className="text-white/90">+07321321</span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-blue-300" />
          <span className="text-white/90">San Francisco, CA</span>
        </div>
      </div>
      
      <div className="bg-white/10 rounded-lg p-4 space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-blue-300 transition-colors"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-blue-300 transition-colors"
        />
        <textarea
          placeholder="Your Message"
          rows={3}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-blue-300 transition-colors resize-none"
        />
      </div>
      
      <button className="w-full bg-blue-600/80 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center space-x-2">
        <Send className="w-4 h-4" />
        <span>Send Message</span>
      </button>
    </div>
  );
};