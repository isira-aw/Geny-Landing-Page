import  { useState } from 'react';
import { Navigation } from './components/Navigation';
import { BackgroundSlideshow } from './components/BackgroundSlideshow';
import { ContentBox } from './components/ContentBox';
import { Gallery } from './components/sections/Gallery';
import { AboutUs } from './components/sections/AboutUs';
import { Services } from './components/sections/Services';
import { ContactUs } from './components/sections/ContactUs';

export type NavigationItem = 'Home' | 'Gallery' | 'About Us' | 'Contact Us';

function App() {
  const [activeSection, setActiveSection] = useState<NavigationItem>('Home');

  const renderContent = () => {
    switch (activeSection) {
      case 'Home':
        return <Services />;
      case 'Gallery':
        return <Gallery />;
      case 'About Us':
        return <AboutUs />;
      case 'Contact Us':
        return <ContactUs />;
      default:
        return <Services />;
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