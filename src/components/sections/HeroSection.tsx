import React, { useState } from 'react';
import { Calendar, Users, MapPin, Star, Crown, Award, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';
import { BookingModal } from '../booking/BookingModal';

export const HeroSection: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Heritage Palace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-maroon/95 via-royal-burgundy/80 to-royal-crimson/70"></div>
        <div className="absolute inset-0 bg-heritage-pattern opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Crown className="w-16 h-16 text-royal-gold opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Award className="w-12 h-12 text-royal-amber opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="w-10 h-10 text-royal-gold opacity-35" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in">
              {/* Heritage Badge */}
              <div className="inline-flex items-center space-x-2 bg-royal-gold/20 backdrop-blur-sm border border-royal-gold/30 rounded-full px-6 py-2">
                <Clock className="w-5 h-5 text-royal-gold" />
                <span className="text-royal-gold font-semibold">Est. 1890 • 135 Years of Heritage</span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-6 text-shadow-royal leading-tight">
                  <span className="block">Heritage</span>
                  <span className="block royal-text-gradient drop-shadow-2xl">Royale</span>
                </h1>
                <div className="w-32 h-1 bg-royal-gradient rounded-full shadow-lg mb-6"></div>
                <p className="text-xl md:text-2xl font-body font-semibold max-w-2xl leading-relaxed drop-shadow-lg">
                  Experience the grandeur of Indian royal heritage in our magnificent 
                  <span className="text-royal-gold font-bold"> palace hotel</span>, 
                  where every moment becomes a cherished memory
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 max-w-lg">
                <div className="flex items-center space-x-2">
                  <Crown className="w-5 h-5 text-royal-gold" />
                  <span className="font-semibold">Royal Suites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-royal-gold" />
                  <span className="font-semibold">Cultural Tours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-royal-gold" />
                  <span className="font-semibold">Heritage Dining</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-royal-gold" />
                  <span className="font-semibold">Prime Location</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection('#heritage')}
                  size="lg"
                  className="text-lg px-10 py-4 font-bold shadow-2xl"
                >
                  Explore Heritage
                </Button>
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-royal-maroon font-bold shadow-2xl"
                >
                  Book Your Stay
                </Button>
              </div>
            </div>

            {/* Right Content - Booking Widget */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Card className="bg-white/95 backdrop-blur-sm border-royal-gold/30 shadow-2xl max-w-md mx-auto lg:mx-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-2">
                    Quick Booking
                  </h3>
                  <p className="text-gray-600">Check availability & rates</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Check In
                      </label>
                      <input
                        type="date"
                        className="royal-input text-sm"
                        defaultValue="2024-03-15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Check Out
                      </label>
                      <input
                        type="date"
                        className="royal-input text-sm"
                        defaultValue="2024-03-17"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Guests
                      </label>
                      <select className="royal-input text-sm">
                        <option>2 Adults</option>
                        <option>1 Adult</option>
                        <option>3 Adults</option>
                        <option>4 Adults</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Rooms
                      </label>
                      <select className="royal-input text-sm">
                        <option>1 Room</option>
                        <option>2 Rooms</option>
                        <option>3 Rooms</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-4 text-lg font-bold"
                  >
                    Check Availability
                  </Button>

                  <div className="text-center pt-4 border-t border-heritage-200">
                    <p className="text-sm text-gray-600 mb-2">Starting from</p>
                    <p className="text-2xl font-bold text-royal-maroon">
                      ₹12,500<span className="text-sm font-normal text-gray-500">/night</span>
                    </p>
                    <p className="text-xs text-gray-500">*Taxes included</p>
                  </div>
                </div>
              </Card>

              {/* Trust Indicators */}
              <div className="mt-6 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold text-royal-gold">4.9</div>
                  <div className="text-xs">Guest Rating</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-2xl font-bold text-royal-gold">135+</div>
                  <div className="text-xs">Years Heritage</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-2xl font-bold text-royal-gold">50+</div>
                  <div className="text-xs">Royal Suites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};