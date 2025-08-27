import React, { useState } from 'react';
import { Sparkles, Car, Briefcase, Heart, Wifi, Dumbbell, Coffee, Shield, Phone, MapPin, Clock, Users, Star, Crown, Award, Gift, Calendar, ChevronRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';

interface SpaService {
  id: string;
  name: string;
  category: string;
  duration: string;
  price: number;
  description: string;
  image: string;
  benefits: string[];
  includes: string[];
  therapist: string;
  heritage: string;
}

interface EventSpace {
  id: string;
  name: string;
  type: string;
  capacity: number;
  area: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  equipment: string[];
  layouts: string[];
  occasions: string[];
}

interface ConciergeService {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<any>;
  availability: string;
  pricing: string;
  features: string[];
}

interface SpecialPackage {
  id: string;
  name: string;
  occasion: string;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  includes: string[];
  highlights: string[];
  addOns: string[];
}

export const AmenitiesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<SpaService | null>(null);
  const [selectedSpace, setSelectedSpace] = useState<EventSpace | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<SpecialPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [amenityCategory, setAmenityCategory] = useState('all');

  const spaServices: SpaService[] = [
    {
      id: 'royal-ayurveda',
      name: 'Royal Ayurvedic Rejuvenation',
      category: 'ayurveda',
      duration: '90 minutes',
      price: 4500,
      description: 'Traditional Ayurvedic treatment using ancient royal recipes and heritage oils, designed to restore balance and vitality as practiced in the royal courts.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Stress relief and relaxation', 'Improved circulation', 'Muscle tension release', 'Mental clarity enhancement'],
      includes: ['Consultation with Ayurvedic expert', 'Heritage oil massage', 'Steam therapy', 'Herbal tea service'],
      therapist: 'Master Vaidya Rajesh Sharma',
      heritage: 'Based on 200-year-old royal Ayurvedic texts from the palace archives'
    },
    {
      id: 'maharani-facial',
      name: 'Maharani Gold Facial',
      category: 'facial',
      duration: '75 minutes',
      price: 3500,
      description: 'Luxurious facial treatment using 24-karat gold and traditional Indian herbs, inspired by the beauty rituals of royal queens.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Anti-aging properties', 'Skin brightening', 'Deep hydration', 'Royal glow enhancement'],
      includes: ['24k gold mask', 'Herbal cleansing', 'Royal massage', 'Moisturizing treatment'],
      therapist: 'Beauty Expert Priya Devi',
      heritage: 'Traditional beauty secrets from the royal zenana (women\'s quarters)'
    },
    {
      id: 'heritage-massage',
      name: 'Heritage Stone Therapy',
      category: 'massage',
      duration: '60 minutes',
      price: 2800,
      description: 'Therapeutic massage using heated stones from the palace grounds, combined with traditional Indian massage techniques.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Deep muscle relaxation', 'Improved blood flow', 'Stress reduction', 'Energy restoration'],
      includes: ['Heated stone therapy', 'Aromatic oils', 'Pressure point massage', 'Relaxation music'],
      therapist: 'Therapy Master Arjun Singh',
      heritage: 'Stones sourced from the original palace construction site'
    },
    {
      id: 'royal-couple-spa',
      name: 'Royal Couple\'s Retreat',
      category: 'couples',
      duration: '120 minutes',
      price: 8500,
      description: 'Intimate spa experience for couples in our private royal suite, featuring synchronized treatments and champagne service.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Romantic bonding', 'Synchronized relaxation', 'Stress relief for two', 'Intimate wellness experience'],
      includes: ['Private spa suite', 'Couples massage', 'Champagne service', 'Rose petal bath'],
      therapist: 'Couple Therapy Specialists',
      heritage: 'Inspired by royal honeymoon traditions of the palace'
    },
    {
      id: 'wellness-package',
      name: 'Heritage Wellness Journey',
      category: 'wellness',
      duration: '4 hours',
      price: 6500,
      description: 'Comprehensive wellness experience combining yoga, meditation, spa treatments, and healthy royal cuisine.',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Complete mind-body wellness', 'Stress elimination', 'Energy restoration', 'Holistic healing'],
      includes: ['Yoga session', 'Meditation guidance', 'Spa treatment', 'Healthy royal meal'],
      therapist: 'Wellness Guru Ananda Swami',
      heritage: 'Based on ancient royal wellness practices and meditation techniques'
    },
    {
      id: 'detox-treatment',
      name: 'Royal Detox & Purification',
      category: 'detox',
      duration: '3 hours',
      price: 5200,
      description: 'Traditional detoxification treatment using heritage herbs and purification rituals practiced by royal physicians.',
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: ['Body purification', 'Toxin elimination', 'Energy boost', 'Mental clarity'],
      includes: ['Herbal steam bath', 'Detox body wrap', 'Purification massage', 'Herbal detox tea'],
      therapist: 'Detox Specialist Dr. Kavita Joshi',
      heritage: 'Ancient purification methods from royal medical texts'
    }
  ];

  const eventSpaces: EventSpace[] = [
    {
      id: 'royal-durbar-hall',
      name: 'Royal Durbar Hall',
      type: 'Grand Ballroom',
      capacity: 300,
      area: '4,500 sq ft',
      price: 85000,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'The magnificent Royal Durbar Hall, where Maharajas once held court, now serves as our premier event venue with original architecture and modern amenities.',
      features: ['40-foot high ceilings', 'Crystal chandeliers', 'Marble flooring', 'Heritage frescoes', 'Royal throne backdrop'],
      equipment: ['State-of-the-art AV system', 'Wireless microphones', 'LED lighting', 'Climate control', 'High-speed WiFi'],
      layouts: ['Theater: 300 guests', 'Banquet: 200 guests', 'Cocktail: 350 guests', 'Conference: 150 guests'],
      occasions: ['Royal weddings', 'Corporate galas', 'Cultural events', 'Award ceremonies']
    },
    {
      id: 'marble-courtyard',
      name: 'Marble Courtyard',
      type: 'Outdoor Venue',
      capacity: 250,
      area: '3,800 sq ft',
      price: 65000,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Stunning open-air courtyard with intricate marble work and traditional fountains, perfect for outdoor celebrations under the stars.',
      features: ['Marble inlay work', 'Central fountain', 'Heritage lighting', 'Garden views', 'Star-lit ambiance'],
      equipment: ['Weather protection', 'Outdoor sound system', 'Decorative lighting', 'Mobile bars', 'Heating/cooling'],
      layouts: ['Cocktail: 250 guests', 'Dinner: 180 guests', 'Reception: 300 guests', 'Cultural: 200 guests'],
      occasions: ['Garden weddings', 'Cocktail parties', 'Cultural performances', 'Product launches']
    },
    {
      id: 'heritage-library',
      name: 'Heritage Library',
      type: 'Intimate Venue',
      capacity: 50,
      area: '1,200 sq ft',
      price: 25000,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Elegant library setting with rare books and manuscripts, ideal for intimate gatherings and corporate meetings.',
      features: ['Antique bookshelves', 'Reading nooks', 'Heritage artifacts', 'Fireplace', 'Natural lighting'],
      equipment: ['Presentation screen', 'Conference table', 'WiFi connectivity', 'Coffee station', 'Climate control'],
      layouts: ['Boardroom: 20 guests', 'Reception: 50 guests', 'Seminar: 35 guests', 'Dinner: 30 guests'],
      occasions: ['Board meetings', 'Book launches', 'Intimate dinners', 'Corporate retreats']
    },
    {
      id: 'royal-gardens',
      name: 'Royal Gardens Pavilion',
      type: 'Garden Venue',
      capacity: 150,
      area: '2,500 sq ft',
      price: 45000,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Picturesque garden pavilion surrounded by heritage trees and royal landscaping, offering a serene natural setting.',
      features: ['Heritage pavilion', 'Landscaped gardens', 'Water features', 'Shade trees', 'Flower arrangements'],
      equipment: ['Garden lighting', 'Sound system', 'Weather tents', 'Garden furniture', 'Catering setup'],
      layouts: ['Garden party: 150 guests', 'Wedding: 120 guests', 'Lunch: 100 guests', 'Tea party: 80 guests'],
      occasions: ['Garden parties', 'Brunch events', 'Team building', 'Anniversary celebrations']
    }
  ];

  const conciergeServices: ConciergeService[] = [
    {
      id: 'personal-butler',
      name: 'Personal Butler Service',
      category: 'personal',
      description: 'Dedicated personal butler for your entire stay, trained in royal hospitality traditions.',
      icon: Crown,
      availability: '24/7',
      pricing: '₹2,500/day',
      features: ['Room service coordination', 'Dining reservations', 'Activity planning', 'Personal shopping']
    },
    {
      id: 'luxury-transport',
      name: 'Luxury Transportation',
      category: 'transport',
      description: 'Premium vehicle fleet including vintage cars and modern luxury vehicles with chauffeur service.',
      icon: Car,
      availability: 'On-demand',
      pricing: '₹1,500-5,000/trip',
      features: ['Airport transfers', 'City tours', 'Heritage site visits', 'Shopping excursions']
    },
    {
      id: 'event-planning',
      name: 'Event Planning Services',
      category: 'events',
      description: 'Complete event management for weddings, corporate events, and special celebrations.',
      icon: Calendar,
      availability: 'By appointment',
      pricing: 'Custom quotes',
      features: ['Venue decoration', 'Catering coordination', 'Entertainment booking', 'Photography services']
    },
    {
      id: 'wellness-concierge',
      name: 'Wellness Concierge',
      category: 'wellness',
      description: 'Personalized wellness programs including spa appointments, yoga sessions, and health consultations.',
      icon: Sparkles,
      availability: '6 AM - 10 PM',
      pricing: 'Complimentary',
      features: ['Spa bookings', 'Fitness planning', 'Dietary guidance', 'Wellness activities']
    },
    {
      id: 'cultural-guide',
      name: 'Heritage Cultural Guide',
      category: 'cultural',
      description: 'Expert cultural guides for heritage tours, local experiences, and historical insights.',
      icon: Award,
      availability: 'Daily tours',
      pricing: '₹800-2,000/tour',
      features: ['Palace tours', 'City heritage walks', 'Cultural experiences', 'Historical storytelling']
    },
    {
      id: 'business-support',
      name: 'Business Support Services',
      category: 'business',
      description: 'Comprehensive business services including meeting coordination and administrative support.',
      icon: Briefcase,
      availability: '9 AM - 6 PM',
      pricing: 'Service-based',
      features: ['Meeting setup', 'Secretarial services', 'Translation services', 'Equipment rental']
    }
  ];

  const specialPackages: SpecialPackage[] = [
    {
      id: 'royal-wedding',
      name: 'Royal Wedding Package',
      occasion: 'Wedding',
      duration: '3 days',
      price: 450000,
      originalPrice: 550000,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete royal wedding experience with traditional ceremonies, luxury accommodations, and personalized service for the couple and guests.',
      includes: ['Royal Durbar Hall venue', 'Bridal suite for 3 nights', '10 guest rooms', 'Traditional decorations', 'Multi-cuisine catering', 'Photography & videography'],
      highlights: ['Maharaja-style ceremony', 'Heritage horse carriage', 'Traditional musicians', 'Royal feast for 200 guests', 'Bridal spa package', 'Fireworks display'],
      addOns: ['Additional guest rooms', 'Extended photography', 'Live entertainment', 'Destination coordination']
    },
    {
      id: 'corporate-retreat',
      name: 'Executive Corporate Retreat',
      occasion: 'Corporate',
      duration: '2 days',
      price: 125000,
      originalPrice: 150000,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive corporate package combining business facilities with heritage experiences for team building and executive meetings.',
      includes: ['Heritage Library venue', '20 executive rooms', 'Business center access', 'AV equipment', 'Gourmet meals', 'Team building activities'],
      highlights: ['Heritage venue meetings', 'Cultural team building', 'Executive dining', 'Wellness sessions', 'Local excursions', 'Networking events'],
      addOns: ['Additional meeting rooms', 'Extended activities', 'Transportation', 'Entertainment']
    },
    {
      id: 'anniversary-celebration',
      name: 'Golden Anniversary Package',
      occasion: 'Anniversary',
      duration: '2 nights',
      price: 85000,
      originalPrice: 100000,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Romantic anniversary celebration with luxury accommodations, private dining, and personalized experiences for couples.',
      includes: ['Royal Suite for 2 nights', 'Private dining experience', 'Couples spa treatment', 'Champagne service', 'Flower decorations', 'Photography session'],
      highlights: ['Candlelit dinner', 'Heritage tour', 'Sunset cocktails', 'Personalized service', 'Memory book', 'Special amenities'],
      addOns: ['Additional nights', 'Guest accommodations', 'Entertainment', 'Extended spa services']
    },
    {
      id: 'birthday-royal',
      name: 'Royal Birthday Celebration',
      occasion: 'Birthday',
      duration: '1 day',
      price: 35000,
      originalPrice: 42000,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Memorable birthday celebration with royal treatment, themed decorations, and personalized service for all ages.',
      includes: ['Marble Courtyard venue', 'Themed decorations', 'Custom cake', 'Entertainment', 'Photography', 'Party favors'],
      highlights: ['Royal throne photo op', 'Traditional performances', 'Heritage games', 'Gourmet catering', 'Personalized gifts', 'Memory video'],
      addOns: ['Extended venue time', 'Additional entertainment', 'Guest accommodations', 'Transportation']
    },
    {
      id: 'cultural-immersion',
      name: 'Heritage Cultural Immersion',
      occasion: 'Cultural',
      duration: '4 days',
      price: 95000,
      originalPrice: 115000,
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Deep cultural experience with workshops, performances, heritage tours, and traditional activities for culture enthusiasts.',
      includes: ['Heritage Room for 4 nights', 'All cultural workshops', 'Heritage tours', 'Traditional meals', 'Cultural performances', 'Craft materials'],
      highlights: ['Cooking masterclass', 'Art workshops', 'Music lessons', 'Dance performances', 'Heritage walks', 'Cultural certificate'],
      addOns: ['Private workshops', 'Extended tours', 'Additional activities', 'Cultural shopping']
    },
    {
      id: 'wellness-retreat',
      name: 'Royal Wellness Retreat',
      occasion: 'Wellness',
      duration: '5 days',
      price: 75000,
      originalPrice: 90000,
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive wellness program combining traditional Ayurveda, yoga, meditation, and spa treatments for complete rejuvenation.',
      includes: ['Heritage Room for 5 nights', 'Daily spa treatments', 'Yoga sessions', 'Meditation classes', 'Healthy cuisine', 'Wellness consultation'],
      highlights: ['Ayurvedic treatments', 'Sunrise yoga', 'Detox programs', 'Wellness cuisine', 'Meditation garden', 'Wellness plan'],
      addOns: ['Extended treatments', 'Private sessions', 'Wellness shopping', 'Follow-up consultations']
    }
  ];

  const amenityCategories = [
    { id: 'all', name: 'All Amenities', icon: Star },
    { id: 'spa', name: 'Spa & Wellness', icon: Sparkles },
    { id: 'events', name: 'Event Spaces', icon: Calendar },
    { id: 'concierge', name: 'Concierge Services', icon: Crown },
    { id: 'packages', name: 'Special Packages', icon: Gift }
  ];

  const coreAmenities = [
    { icon: Wifi, name: 'High-Speed WiFi', description: 'Complimentary throughout property' },
    { icon: Car, name: 'Valet Parking', description: '24/7 secure parking service' },
    { icon: Dumbbell, name: 'Heritage Fitness Center', description: 'Modern equipment in royal setting' },
    { icon: Coffee, name: '24/7 Room Service', description: 'Royal cuisine anytime' },
    { icon: Shield, name: 'Security Services', description: 'Round-the-clock protection' },
    { icon: Phone, name: 'Business Center', description: 'Full-service business facilities' }
  ];

  return (
    <section id="amenities" className="heritage-section bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-royal-gold/10 border border-royal-gold/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-royal-gold" />
            <span className="text-royal-gold font-semibold">Luxury Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black royal-text-gradient mb-6 text-shadow-royal">
            Amenities & Services
          </h2>
          <div className="heritage-divider mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Experience unparalleled luxury with our comprehensive range of 
            <span className="font-bold text-royal-maroon"> royal amenities and personalized services</span>, 
            designed to exceed every expectation during your heritage stay.
          </p>
        </div>

        {/* Amenity Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {amenityCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setAmenityCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 animate-fade-in ${
                amenityCategory === category.id
                  ? 'bg-royal-gold text-white shadow-royal'
                  : 'bg-white border-2 border-heritage-300 text-royal-maroon hover:border-royal-gold hover:bg-royal-gold/10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Core Amenities Overview */}
        {(amenityCategory === 'all') && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-royal-maroon mb-4">Essential Amenities</h3>
              <p className="text-lg text-gray-600">Complimentary services for all guests</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreAmenities.map((amenity, index) => (
                <Card
                  key={amenity.name}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">{amenity.name}</h4>
                  <p className="text-gray-600">{amenity.description}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Spa & Wellness Services */}
        {(amenityCategory === 'all' || amenityCategory === 'spa') && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Sparkles className="w-8 h-8 text-royal-gold" />
                <h3 className="text-3xl font-serif font-bold text-royal-maroon">Heritage Spa & Wellness</h3>
              </div>
              <p className="text-lg text-gray-600">Traditional treatments with royal heritage recipes</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spaServices.map((service, index) => (
                <Card
                  key={service.id}
                  className="group cursor-pointer overflow-hidden animate-fade-in"
                  padding="none"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-royal-gradient/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {service.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-royal-maroon text-white px-3 py-1 rounded-full text-sm font-bold">
                        ₹{service.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl text-royal-maroon mb-2 line-clamp-2">
                      {service.name}
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Clock className="w-4 h-4 mr-2 text-royal-gold" />
                      {service.duration}
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm text-royal-gold font-semibold mb-2">Heritage Connection:</p>
                      <p className="text-xs text-gray-600 line-clamp-2">{service.heritage}</p>
                    </div>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      variant="outline"
                      className="w-full"
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Event Spaces */}
        {(amenityCategory === 'all' || amenityCategory === 'events') && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Calendar className="w-8 h-8 text-royal-gold" />
                <h3 className="text-3xl font-serif font-bold text-royal-maroon">Royal Event Spaces</h3>
              </div>
              <p className="text-lg text-gray-600">Magnificent venues for unforgettable celebrations</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {eventSpaces.map((space, index) => (
                <Card
                  key={space.id}
                  className="group cursor-pointer overflow-hidden animate-fade-in"
                  padding="none"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedSpace(space)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={space.image}
                      alt={space.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-royal-gradient/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {space.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-royal-maroon">₹{space.price.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">per event</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-2xl text-royal-maroon mb-3">
                      {space.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-royal-gold" />
                        {space.capacity} guests
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-royal-gold" />
                        {space.area}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {space.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-royal-maroon mb-2">Perfect for:</h4>
                      <div className="flex flex-wrap gap-2">
                        {space.occasions.slice(0, 3).map((occasion, idx) => (
                          <span key={idx} className="bg-heritage-100 text-royal-maroon px-2 py-1 rounded text-xs">
                            {occasion}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSpace(space);
                      }}
                      variant="outline"
                      className="w-full"
                    >
                      View Details & Book
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Concierge Services */}
        {(amenityCategory === 'all' || amenityCategory === 'concierge') && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Crown className="w-8 h-8 text-royal-gold" />
                <h3 className="text-3xl font-serif font-bold text-royal-maroon">Royal Concierge Services</h3>
              </div>
              <p className="text-lg text-gray-600">Personalized assistance for every need</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conciergeServices.map((service, index) => (
                <Card
                  key={service.id}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">{service.name}</h4>
                  <p className="text-gray-700 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Availability:</span>
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Pricing:</span>
                      <span>{service.pricing}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-royal-maroon mb-2">Services Include:</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-3 h-3 text-royal-gold mr-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => setIsBookingOpen(true)}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Request Service
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Special Packages */}
        {(amenityCategory === 'all' || amenityCategory === 'packages') && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Gift className="w-8 h-8 text-royal-gold" />
                <h3 className="text-3xl font-serif font-bold text-royal-maroon">Special Occasion Packages</h3>
              </div>
              <p className="text-lg text-gray-600">Curated experiences for life's special moments</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialPackages.map((pkg, index) => (
                <Card
                  key={pkg.id}
                  className="group cursor-pointer overflow-hidden animate-fade-in"
                  padding="none"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedPackage(pkg)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-royal-gradient/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {pkg.occasion}
                      </span>
                    </div>
                    {pkg.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-royal-crimson text-white px-3 py-1 rounded-full text-sm font-bold">
                          Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl text-royal-maroon mb-2 line-clamp-2">
                      {pkg.name}
                    </h3>
                    
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-royal-gold" />
                        {pkg.duration}
                      </div>
                      <div className="text-right">
                        {pkg.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            ₹{pkg.originalPrice.toLocaleString()}
                          </div>
                        )}
                        <div className="text-xl font-bold text-royal-maroon">
                          ₹{pkg.price.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {pkg.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-royal-maroon mb-2">Package Highlights:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <Star className="w-3 h-3 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                        {pkg.highlights.length > 3 && (
                          <li className="text-royal-gold font-semibold text-sm">
                            +{pkg.highlights.length - 3} more highlights
                          </li>
                        )}
                      </ul>
                    </div>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPackage(pkg);
                      }}
                      variant="outline"
                      className="w-full"
                    >
                      View Package Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Premium Services CTA */}
        <div className="text-center">
          <Card className="bg-royal-gradient p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-heritage-pattern opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Crown className="w-10 h-10" />
                <h3 className="text-3xl font-serif font-bold">Royal Treatment Awaits</h3>
              </div>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the pinnacle of luxury with our comprehensive amenities and personalized services, 
                designed to make your stay truly unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  icon={Phone}
                  className="border-white text-white hover:bg-white hover:text-royal-maroon font-bold"
                >
                  Speak to Concierge
                </Button>
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  variant="ghost"
                  size="lg"
                  icon={Calendar}
                  className="text-white hover:bg-white/20 font-bold"
                >
                  Plan Your Stay
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Spa Service Details Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.name}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedService.image}
              alt={selectedService.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Treatment Details</h4>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold">Duration:</span>
                    <span>{selectedService.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Therapist:</span>
                    <span>{selectedService.therapist}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-royal-maroon border-t pt-2">
                    <span>Price:</span>
                    <span>₹{selectedService.price.toLocaleString()}</span>
                  </div>
                </div>
                
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-3">Treatment Benefits</h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">What's Included</h4>
                <ul className="space-y-2 mb-6">
                  {selectedService.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-3">Heritage Connection</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedService.heritage}
                </p>
              </div>
            </div>
            
            <div className="bg-heritage-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {selectedService.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="flex-1"
                icon={Calendar}
              >
                Book Treatment - ₹{selectedService.price.toLocaleString()}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Event Space Details Modal */}
      {selectedSpace && (
        <Modal
          isOpen={!!selectedSpace}
          onClose={() => setSelectedSpace(null)}
          title={selectedSpace.name}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedSpace.image}
              alt={selectedSpace.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Venue Details</h4>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold">Type:</span>
                    <span>{selectedSpace.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Capacity:</span>
                    <span>{selectedSpace.capacity} guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Area:</span>
                    <span>{selectedSpace.area}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-royal-maroon border-t pt-2">
                    <span>Starting Price:</span>
                    <span>₹{selectedSpace.price.toLocaleString()}</span>
                  </div>
                </div>
                
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-3">Venue Features</h4>
                <ul className="space-y-2">
                  {selectedSpace.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Equipment & Services</h4>
                <ul className="space-y-2 mb-6">
                  {selectedSpace.equipment.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-3">Layout Options</h4>
                <div className="space-y-2">
                  {selectedSpace.layouts.map((layout, index) => (
                    <div key={index} className="bg-heritage-50 px-3 py-2 rounded text-sm">
                      {layout}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-heritage-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {selectedSpace.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="flex-1"
                icon={Calendar}
              >
                Request Quote & Book
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Special Package Details Modal */}
      {selectedPackage && (
        <Modal
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
          title={selectedPackage.name}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedPackage.image}
              alt={selectedPackage.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Package Details</h4>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold">Occasion:</span>
                    <span>{selectedPackage.occasion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Duration:</span>
                    <span>{selectedPackage.duration}</span>
                  </div>
                  {selectedPackage.originalPrice && (
                    <div className="flex justify-between">
                      <span className="font-semibold">Original Price:</span>
                      <span className="line-through text-gray-500">₹{selectedPackage.originalPrice.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg text-royal-maroon border-t pt-2">
                    <span>Package Price:</span>
                    <span>₹{selectedPackage.price.toLocaleString()}</span>
                  </div>
                </div>
                
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-3">Package Includes</h4>
                <ul className="space-y-2">
                  {selectedPackage.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Special Highlights</h4>
                <ul className="space-y-2 mb-6">
                  {selectedPackage.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-3">Optional Add-ons</h4>
                <div className="space-y-2">
                  {selectedPackage.addOns.map((addon, index) => (
                    <div key={index} className="bg-heritage-50 px-3 py-2 rounded text-sm">
                      {addon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-heritage-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {selectedPackage.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="flex-1"
                icon={Calendar}
              >
                Book Package - ₹{selectedPackage.price.toLocaleString()}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Service Booking Modal */}
      <Modal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Book Service"
        size="md"
      >
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-serif font-bold text-royal-maroon mb-2">
              Reserve Your Service
            </h4>
            <p className="text-gray-600">Complete your booking details below</p>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="royal-input"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="royal-input"
                  placeholder="Enter last name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="royal-input"
                placeholder="Enter email address"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="royal-input"
                placeholder="+91 98765 43210"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type
                </label>
                <select className="royal-input">
                  <option>Spa Treatment</option>
                  <option>Event Space</option>
                  <option>Concierge Service</option>
                  <option>Special Package</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="royal-input"
                  defaultValue="2024-03-20"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Special Requirements (Optional)
              </label>
              <textarea
                className="royal-input h-20 resize-none"
                placeholder="Any special requirements or preferences..."
              />
            </div>
          </div>
          
          <div className="bg-heritage-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Service Consultation:</span>
              <span className="text-lg font-bold text-royal-maroon">Complimentary</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">*Final pricing will be provided after consultation</p>
          </div>
          
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setIsBookingOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                alert('Service request submitted! Our concierge team will contact you within 2 hours.');
                setIsBookingOpen(false);
              }}
              className="flex-1"
            >
              Submit Request
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};