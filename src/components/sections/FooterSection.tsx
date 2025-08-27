import React from 'react';
import { Crown, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Award, Shield, Wifi, Car, Clock, Globe, Heart, Star, Calendar, Users, Camera, Music } from 'lucide-react';
import { Button } from '../ui/Button';

export const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Heritage Royale', href: '#heritage' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Cultural Experiences', href: '#experiences' },
    { name: 'Dining', href: '#dining' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  const services = [
    { name: 'Room Reservations', href: '#booking' },
    { name: 'Event Planning', href: '#contact' },
    { name: 'Spa & Wellness', href: '#amenities' },
    { name: 'Cultural Tours', href: '#experiences' },
    { name: 'Transportation', href: '#location' },
    { name: 'Concierge Services', href: '#contact' },
  ];

  const experiences = [
    { name: 'Heritage Walks', href: '#experiences' },
    { name: 'Cooking Classes', href: '#experiences' },
    { name: 'Cultural Performances', href: '#experiences' },
    { name: 'Art Workshops', href: '#experiences' },
    { name: 'Royal Dining', href: '#dining' },
    { name: 'Spa Treatments', href: '#amenities' },
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Cancellation Policy', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Heritage Conservation', href: '#' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', followers: '25K' },
    { name: 'Instagram', icon: Instagram, href: '#', followers: '45K' },
    { name: 'Twitter', icon: Twitter, href: '#', followers: '18K' },
    { name: 'YouTube', icon: Youtube, href: '#', followers: '12K' },
  ];

  const awards = [
    'Best Heritage Hotel 2024',
    'Cultural Tourism Excellence',
    'Luxury Hotel of the Year',
    'Heritage Conservation Award',
    'Sustainable Tourism Leader',
    'Best Wedding Destination'
  ];

  const amenityIcons = [
    { icon: Wifi, name: 'Free WiFi' },
    { icon: Car, name: 'Valet Parking' },
    { icon: Shield, name: '24/7 Security' },
    { icon: Clock, name: '24/7 Concierge' },
    { icon: Award, name: 'Heritage Certified' },
    { icon: Globe, name: 'Multi-Language Staff' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-royal-maroon text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-heritage-pattern opacity-10"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="bg-royal-gradient py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <Crown className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-3xl font-serif font-bold mb-4">
                Join the Royal Heritage Family
              </h3>
              <p className="text-xl mb-8 leading-relaxed">
                Subscribe to receive exclusive offers, cultural event updates, and heritage stories 
                directly from the palace. Be the first to know about special packages and royal celebrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button
                  className="bg-white text-royal-maroon hover:bg-gray-100 font-bold px-8 py-4"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm mt-4 opacity-90">
                Join 15,000+ heritage enthusiasts. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
              
              {/* Hotel Information */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <Crown className="w-8 h-8 text-royal-gold" />
                  <div>
                    <h3 className="text-2xl font-serif font-black royal-text-gradient">
                      Heritage Royale
                    </h3>
                    <p className="text-xs text-royal-amber font-bold tracking-wider">
                      PALACE HOTEL
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Experience the grandeur of Indian royal heritage in our magnificent palace hotel, 
                  where every moment becomes a cherished memory. Since 1890, we've been preserving 
                  the essence of royal hospitality for discerning guests worldwide.
                </p>

                {/* Contact Information */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-royal-gold" />
                    <div>
                      <p className="font-semibold">+91 98765 43210</p>
                      <p className="text-sm text-gray-400">24/7 Guest Services</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-royal-gold" />
                    <div>
                      <p className="font-semibold">reservations@heritageroyale.com</p>
                      <p className="text-sm text-gray-400">Response within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-royal-gold" />
                    <div>
                      <p className="font-semibold">Royal Heritage District</p>
                      <p className="text-sm text-gray-400">Rajasthan 302001, India</p>
                    </div>
                  </div>
                </div>

                {/* Amenities Icons */}
                <div className="grid grid-cols-3 gap-4">
                  {amenityIcons.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <amenity.icon className="w-4 h-4 text-royal-gold" />
                      <span className="text-sm text-gray-300">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-serif font-bold mb-6 text-royal-gold">
                  Explore
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-royal-gold transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-serif font-bold mb-6 text-royal-gold">
                  Services
                </h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <button
                        onClick={() => scrollToSection(service.href)}
                        className="text-gray-300 hover:text-royal-gold transition-colors duration-200 text-sm"
                      >
                        {service.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experiences */}
              <div>
                <h4 className="text-lg font-serif font-bold mb-6 text-royal-gold">
                  Experiences
                </h4>
                <ul className="space-y-3">
                  {experiences.map((experience) => (
                    <li key={experience.name}>
                      <button
                        onClick={() => scrollToSection(experience.href)}
                        className="text-gray-300 hover:text-royal-gold transition-colors duration-200 text-sm"
                      >
                        {experience.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="border-t border-royal-gold/20 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Award className="w-8 h-8 text-royal-gold mx-auto mb-4" />
              <h4 className="text-xl font-serif font-bold text-royal-gold mb-2">
                Awards & Recognition
              </h4>
              <p className="text-gray-400">Honored by prestigious organizations worldwide</p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Star className="w-6 h-6 text-royal-gold mx-auto mb-2" />
                  <p className="text-sm text-gray-300 font-semibold">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heritage Conservation */}
        <div className="border-t border-royal-gold/20 py-12 bg-royal-burgundy/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-royal-gold" />
                  <h4 className="text-2xl font-serif font-bold text-royal-gold">
                    Heritage Conservation Commitment
                  </h4>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Heritage Royale is committed to preserving India's rich cultural heritage for future generations. 
                  We actively participate in conservation efforts, support local artisans, and maintain authentic 
                  architectural elements while providing modern luxury amenities.
                </p>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-royal-gold mb-1">135+</div>
                    <div className="text-sm text-gray-400">Years Preserved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-royal-gold mb-1">50+</div>
                    <div className="text-sm text-gray-400">Artifacts Protected</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-royal-gold mb-1">25+</div>
                    <div className="text-sm text-gray-400">Local Artisans Supported</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-royal-gold mb-1">100%</div>
                    <div className="text-sm text-gray-400">Sustainable Practices</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-royal-gold/10 rounded-lg p-8">
                  <Heart className="w-12 h-12 text-royal-gold mx-auto mb-4" />
                  <h5 className="text-xl font-serif font-bold text-royal-gold mb-4">
                    Preserving Heritage, Creating Memories
                  </h5>
                  <p className="text-gray-300 mb-6">
                    Every stay contributes to the preservation of this magnificent heritage property 
                    and supports local cultural initiatives.
                  </p>
                  <Button
                    variant="outline"
                    className="border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-white"
                  >
                    Learn About Our Conservation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Stats */}
        <div className="border-t border-royal-gold/20 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Social Media */}
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-serif font-bold text-royal-gold mb-6">
                  Follow Our Royal Journey
                </h4>
                <p className="text-gray-300 mb-6">
                  Stay connected with Heritage Royale on social media for daily heritage moments, 
                  cultural celebrations, and behind-the-scenes glimpses of palace life.
                </p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="group bg-white/10 hover:bg-royal-gold p-3 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="w-6 h-6 text-white group-hover:text-royal-maroon" />
                    </a>
                  ))}
                </div>
                <div className="flex justify-center lg:justify-start space-x-6 mt-4 text-sm text-gray-400">
                  {socialLinks.map((social) => (
                    <span key={social.name}>
                      {social.followers} followers
                    </span>
                  ))}
                </div>
              </div>

              {/* Heritage Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-lg">
                  <Users className="w-8 h-8 text-royal-gold mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">2,500+</div>
                  <div className="text-sm text-gray-400">Happy Guests Annually</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg">
                  <Calendar className="w-8 h-8 text-royal-gold mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">365</div>
                  <div className="text-sm text-gray-400">Days of Royal Service</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg">
                  <Camera className="w-8 h-8 text-royal-gold mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">100+</div>
                  <div className="text-sm text-gray-400">Cultural Events Yearly</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg">
                  <Music className="w-8 h-8 text-royal-gold mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-400">Heritage Experiences</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-royal-gold/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-gray-400">
                  © {currentYear} Heritage Royale Palace Hotel. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Preserving royal heritage since 1890 • Rajasthan, India
                </p>
              </div>

              {/* Policy Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {policies.map((policy) => (
                  <a
                    key={policy.name}
                    href={policy.href}
                    className="text-gray-400 hover:text-royal-gold transition-colors duration-200"
                  >
                    {policy.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Information */}
        <div className="bg-royal-burgundy/50 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 text-center text-sm">
              <div>
                <Clock className="w-5 h-5 text-royal-gold mx-auto mb-2" />
                <p className="font-semibold text-white">24/7 Guest Services</p>
                <p className="text-gray-400">Always here to assist you</p>
              </div>
              <div>
                <Shield className="w-5 h-5 text-royal-gold mx-auto mb-2" />
                <p className="font-semibold text-white">Emergency: +91 98765 43299</p>
                <p className="text-gray-400">Round-the-clock security</p>
              </div>
              <div>
                <Phone className="w-5 h-5 text-royal-gold mx-auto mb-2" />
                <p className="font-semibold text-white">Concierge: +91 98765 43210</p>
                <p className="text-gray-400">Personal assistance available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};