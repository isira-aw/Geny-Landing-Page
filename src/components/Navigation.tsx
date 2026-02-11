import React, { useState } from 'react';
import { NavigationItem } from '../App';

interface NavigationProps {
  activeSection: NavigationItem;
  onSectionChange: (section: NavigationItem) => void;
}

const navigationItems: NavigationItem[] = ['Home', 'Gallery', 'About Us', 'Contact Us'];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="text-white font-bold text-xl md:text-2xl tracking-wide">
            Generator Monitoring System
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 md:space-x-8">
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

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-70 p-6 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onSectionChange(item);
                  setMobileMenuOpen(false); // Close menu on section change
                }}
                className={`w-full text-white font-medium text-lg tracking-wide transition-all duration-300 hover:text-blue-300 hover:scale-110 hover:drop-shadow-lg relative group ${
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
        )}
      </div>
    </nav>
  );
};
