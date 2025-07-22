import React from 'react';
import { NavigationItem } from '../App';

interface NavigationProps {
  activeSection: NavigationItem;
  onSectionChange: (section: NavigationItem) => void;
}

const navigationItems: NavigationItem[] = [ 'Home', 'Gallery', 'About Us','Contact Us'];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="text-white font-bold text-xl md:text-2xl tracking-wide">
          Generator Monitoring System
          </div>
          
          <div className="flex space-x-6 md:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => onSectionChange(item)}
                className={`text-white font-medium text-sm md:text-base tracking-wide transition-all duration-300 hover:text-blue-300 hover:scale-110 hover:drop-shadow-lg relative group ${
                  activeSection === item ? 'text-blue-300' : ''
                }`}
              >
                {item}
                {activeSection === item && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-300 animate-pulse rounded-full" />
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};