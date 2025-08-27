import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Car, Wifi, Shield, Award, MessageSquare, Calendar, Users, Crown } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ContactForm } from '../forms/ContactForm';
import { ReviewForm } from '../forms/ReviewForm';

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'review'>('contact');

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      description: '24/7 Guest Services'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['reservations@heritageroyale.com', 'concierge@heritageroyale.com'],
      description: 'Response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Heritage Royale Palace Hotel', 'Royal Heritage District, Rajasthan 302001'],
      description: 'Prime heritage location'
    },
    {
      icon: Clock,
      title: 'Reception Hours',
      details: ['24/7 Front Desk', 'Concierge: 6:00 AM - 11:00 PM'],
      description: 'Always at your service'
    }
  ];

  const quickServices = [
    {
      icon: Calendar,
      title: 'Room Reservations',
      description: 'Book your heritage stay',
      action: 'Book Now'
    },
    {
      icon: Users,
      title: 'Event Planning',
      description: 'Weddings & celebrations',
      action: 'Plan Event'
    },
    {
      icon: Crown,
      title: 'Concierge Services',
      description: 'Personal assistance',
      action: 'Request Service'
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Airport transfers',
      action: 'Book Transfer'
    }
  ];

  const amenityHighlights = [
    { icon: Wifi, text: 'Complimentary WiFi' },
    { icon: Car, text: 'Valet Parking' },
    { icon: Shield, text: '24/7 Security' },
    { icon: Award, text: 'Heritage Certified' }
  ];

  return (
    <section id="contact" className="heritage-section bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-royal-gold/10 border border-royal-gold/30 rounded-full px-6 py-2 mb-6">
            <MessageSquare className="w-5 h-5 text-royal-gold" />
            <span className="text-royal-gold font-semibold">Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black royal-text-gradient mb-6 text-shadow-royal">
            Contact Us
          </h2>
          <div className="heritage-divider mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Experience the warmth of royal hospitality. Our dedicated team is here to assist you with 
            <span className="font-bold text-royal-maroon"> reservations, inquiries, and personalized service</span> 
            to make your heritage experience unforgettable.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={info.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif font-bold text-xl text-royal-maroon mb-3">
                {info.title}
              </h3>
              <div className="space-y-1 mb-3">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="text-sm text-gray-600">{info.description}</p>
            </Card>
          ))}
        </div>

        {/* Quick Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-royal-maroon mb-4">Quick Services</h3>
            <p className="text-lg text-gray-600">Fast access to our most popular services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <Card
                key={service.title}
                className="text-center group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-gold/20 transition-colors">
                  <service.icon className="w-6 h-6 text-royal-gold" />
                </div>
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-royal-gold group-hover:text-white group-hover:border-royal-gold transition-all"
                >
                  {service.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form and Review Tabs */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-heritage-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'contact'
                    ? 'bg-royal-gold text-white shadow-lg'
                    : 'text-royal-maroon hover:bg-royal-gold/10'
                }`}
              >
                Contact Form
              </button>
              <button
                onClick={() => setActiveTab('review')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'review'
                    ? 'bg-royal-gold text-white shadow-lg'
                    : 'text-royal-maroon hover:bg-royal-gold/10'
                }`}
              >
                Write Review
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 'contact' && <ContactForm />}
            {activeTab === 'review' && <ReviewForm />}
          </div>
        </div>

        {/* Location and Amenities */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Location Map Placeholder */}
          <Card className="p-0 overflow-hidden">
            <div className="bg-gray-100 h-80 flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h4>
                <p className="text-gray-500">Heritage location in Royal District</p>
              </div>
              <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-royal-gold" />
                  <div>
                    <p className="font-semibold text-royal-maroon text-sm">Heritage Royale</p>
                    <p className="text-xs text-gray-600">Royal Heritage District</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-serif font-bold text-xl text-royal-maroon mb-3">
                Prime Heritage Location
              </h4>
              <p className="text-gray-700 mb-4">
                Located in the heart of the Royal Heritage District, Heritage Royale offers easy access to 
                major cultural attractions, shopping areas, and transportation hubs.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• 5 minutes from City Palace</p>
                <p>• 10 minutes from Heritage Museum</p>
                <p>• 15 minutes from Airport</p>
                <p>• Walking distance to cultural sites</p>
              </div>
            </div>
          </Card>

          {/* Amenities and Services */}
          <div className="space-y-6">
            <Card>
              <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">
                Hotel Amenities
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {amenityHighlights.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <amenity.icon className="w-5 h-5 text-royal-gold" />
                    <span className="text-gray-700">{amenity.text}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">
                Getting Here
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-semibold">By Air:</p>
                  <p>Jaipur International Airport - 15 minutes drive</p>
                </div>
                <div>
                  <p className="font-semibold">By Train:</p>
                  <p>Jaipur Junction Railway Station - 20 minutes drive</p>
                </div>
                <div>
                  <p className="font-semibold">By Road:</p>
                  <p>Well connected via National Highway, ample parking available</p>
                </div>
              </div>
            </Card>

            <Card className="bg-royal-gradient text-white">
              <div className="text-center">
                <Crown className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-serif font-bold text-xl mb-2">
                  24/7 Royal Concierge
                </h4>
                <p className="mb-4">
                  Our dedicated concierge team is available round the clock to assist with 
                  reservations, local recommendations, and special requests.
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-royal-maroon"
                >
                  Contact Concierge
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Emergency and Important Information */}
        <Card className="bg-heritage-50 text-center">
          <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">
            Important Information
          </h4>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-2">Check-in / Check-out</p>
              <p>Check-in: 3:00 PM</p>
              <p>Check-out: 12:00 PM</p>
              <p>Early check-in/late check-out available on request</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Cancellation Policy</p>
              <p>Free cancellation up to 24 hours before arrival</p>
              <p>Special event bookings may have different terms</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Emergency Contact</p>
              <p>24/7 Emergency: +91 98765 43299</p>
              <p>Medical Emergency: 108</p>
              <p>Fire Emergency: 101</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};