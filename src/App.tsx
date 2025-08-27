import React from 'react';
import { Navigation } from './components/layout/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { HeritageSection } from './components/sections/HeritageSection';
import { RoomsSection } from './components/sections/RoomsSection';
import { ExperiencesSection } from './components/sections/ExperiencesSection';
import { GallerySection } from './components/sections/GallerySection';
import { DiningSection } from './components/sections/DiningSection';
import { AmenitiesSection } from './components/sections/AmenitiesSection';
import { LocationSection } from './components/sections/LocationSection';
import { ContactSection } from './components/sections/ContactSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FooterSection } from './components/sections/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-heritage-50">
      <Navigation />
      
      <HeroSection />
      <HeritageSection />
      <RoomsSection />
      <ExperiencesSection />
      <GallerySection />
      <DiningSection />
      <AmenitiesSection />
      <LocationSection />
      <ContactSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}

export default App;