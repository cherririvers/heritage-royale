import React, { useState, useEffect } from 'react';
import { Menu, X, Crown, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'Heritage', href: '#heritage' },
  { name: 'Rooms & Suites', href: '#rooms' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Dining', href: '#dining' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-royal-maroon text-royal-cream py-2 px-4 text-sm shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>reservations@heritageroyale.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Experience Royal Heritage Since 1890</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${isScrolled ? 'fixed top-0' : 'relative'} w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-royal border-b border-heritage-200' : 'bg-white/90 backdrop-blur-sm shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Crown className="w-8 h-8 text-royal-gold" />
              <div>
                <h1 className="text-2xl font-serif font-black royal-text-gradient drop-shadow-lg">
                  Heritage Royale
                </h1>
                <p className="text-xs text-royal-amber font-bold tracking-wider drop-shadow">
                  PALACE HOTEL
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-royal-maroon hover:text-royal-gold font-semibold transition-colors duration-200 relative group text-shadow-sm"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-royal-gradient rounded-full transition-all duration-300 group-hover:w-full shadow-lg"></span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('#booking')}
                size="sm"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-royal-maroon hover:text-royal-gold transition-colors bg-white/20 backdrop-blur-sm"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden bg-white/95 backdrop-blur-md border-t border-heritage-200 shadow-lg ${
            isScrolled ? 'fixed top-full' : 'absolute top-full'
          } left-0 right-0`}>
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-royal-maroon hover:text-royal-gold font-semibold py-2 transition-colors duration-200 text-shadow-sm"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-heritage-200">
                <Button
                  onClick={() => scrollToSection('#booking')}
                  className="w-full"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};