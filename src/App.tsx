import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { BackgroundSlideshow } from './components/BackgroundSlideshow';
import { ContentBox } from './components/ContentBox';
import { Gallery } from './components/sections/Gallery';
import { AboutUs } from './components/sections/AboutUs';
import { Services } from './components/sections/Services';
import { ContactUs } from './components/sections/ContactUs';

export type NavigationItem = 'Gallery' | 'About Us' | 'Services' | 'Contact Us';

function App() {
  const [activeSection, setActiveSection] = useState<NavigationItem>('Gallery');

  const renderContent = () => {
    switch (activeSection) {
      case 'Gallery':
        return <Gallery />;
      case 'About Us':
        return <AboutUs />;
      case 'Services':
        return <Services />;
      case 'Contact Us':
        return <ContactUs />;
      default:
        return <Gallery />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <div id="section1" className="h-screen relative">
        <BackgroundSlideshow />
        
        <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
          <ContentBox>
            {renderContent()}
          </ContentBox>
        </div>
      </div>
    </div>
  );
}

export default App;