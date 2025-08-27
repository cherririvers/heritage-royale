import React, { useState } from 'react';
import { MapPin, Clock, Car, Plane, Train, Calendar, Star, Camera, Navigation, Award, Compass, Route, Globe, Mountain, Building, TreePine } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';

interface Attraction {
  id: string;
  name: string;
  category: string;
  distance: string;
  duration: string;
  description: string;
  image: string;
  highlights: string[];
  openingHours: string;
  entryFee: string;
  rating: number;
  culturalSignificance: string;
  bestTimeToVisit: string;
}

interface Festival {
  id: string;
  name: string;
  date: string;
  duration: string;
  description: string;
  image: string;
  location: string;
  highlights: string[];
  culturalContext: string;
  ticketPrice: string;
}

interface TransportOption {
  id: string;
  type: string;
  name: string;
  distance: string;
  duration: string;
  cost: string;
  description: string;
  icon: React.ComponentType<any>;
  frequency: string;
  bookingInfo: string;
}

export const LocationSection: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);
  const [selectedTransport, setSelectedTransport] = useState<TransportOption | null>(null);
  const [attractionFilter, setAttractionFilter] = useState('all');
  const [isMapOpen, setIsMapOpen] = useState(false);

  const nearbyAttractions: Attraction[] = [
    {
      id: 'city-palace',
      name: 'City Palace Complex',
      category: 'palace',
      distance: '2.5 km',
      duration: '5 minutes',
      description: 'Magnificent royal palace complex showcasing Rajasthani and Mughal architecture with museums, courtyards, and royal artifacts.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Chandra Mahal and Mubarak Mahal',
        'Royal armory and textile museum',
        'Peacock Gate and courtyards',
        'Maharaja Sawai Man Singh II Museum'
      ],
      openingHours: '9:30 AM - 5:00 PM',
      entryFee: '₹500 (Indians), ₹2000 (Foreigners)',
      rating: 4.8,
      culturalSignificance: 'Former royal residence of Jaipur rulers, showcasing 300 years of royal heritage and architectural evolution.',
      bestTimeToVisit: 'October to March, early morning or late afternoon'
    },
    {
      id: 'hawa-mahal',
      name: 'Hawa Mahal (Palace of Winds)',
      category: 'monument',
      distance: '3.2 km',
      duration: '8 minutes',
      description: 'Iconic pink sandstone palace with 953 windows, built for royal ladies to observe street festivals while remaining unseen.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        '953 intricately carved windows',
        'Five-story pyramid structure',
        'Pink sandstone facade',
        'Archaeological museum inside'
      ],
      openingHours: '9:00 AM - 4:30 PM',
      entryFee: '₹50 (Indians), ₹200 (Foreigners)',
      rating: 4.6,
      culturalSignificance: 'Symbol of Jaipur\'s architectural brilliance and royal purdah system, representing women\'s place in royal society.',
      bestTimeToVisit: 'Early morning for best lighting and fewer crowds'
    },
    {
      id: 'amber-fort',
      name: 'Amber Fort & Palace',
      category: 'fort',
      distance: '11 km',
      duration: '25 minutes',
      description: 'Majestic hilltop fort with stunning architecture, mirror work, and panoramic views of Maota Lake and surrounding hills.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Sheesh Mahal (Mirror Palace)',
        'Elephant rides to the fort',
        'Diwan-i-Khas and Diwan-i-Aam',
        'Sound and light show'
      ],
      openingHours: '8:00 AM - 6:00 PM',
      entryFee: '₹100 (Indians), ₹500 (Foreigners)',
      rating: 4.9,
      culturalSignificance: 'Former capital of Kachwaha Rajputs, UNESCO World Heritage site showcasing Rajput military architecture.',
      bestTimeToVisit: 'October to March, morning hours for elephant rides'
    },
    {
      id: 'jantar-mantar',
      name: 'Jantar Mantar Observatory',
      category: 'monument',
      distance: '2.8 km',
      duration: '6 minutes',
      description: 'UNESCO World Heritage astronomical observatory with 19 architectural instruments for measuring time and celestial positions.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'World\'s largest stone sundial',
        '19 astronomical instruments',
        'Samrat Yantra and Jai Prakash',
        'UNESCO World Heritage Site'
      ],
      openingHours: '9:00 AM - 4:30 PM',
      entryFee: '₹50 (Indians), ₹200 (Foreigners)',
      rating: 4.4,
      culturalSignificance: 'Testament to Indian astronomical knowledge and Maharaja Sawai Jai Singh II\'s scientific vision.',
      bestTimeToVisit: 'Morning hours with guided tour for better understanding'
    },
    {
      id: 'albert-hall',
      name: 'Albert Hall Museum',
      category: 'museum',
      distance: '4.1 km',
      duration: '10 minutes',
      description: 'Rajasthan\'s oldest museum housed in beautiful Indo-Saracenic architecture, showcasing artifacts, paintings, and sculptures.',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Indo-Saracenic architecture',
        'Egyptian mummy display',
        'Miniature paintings collection',
        'Traditional Rajasthani artifacts'
      ],
      openingHours: '9:00 AM - 5:00 PM',
      entryFee: '₹40 (Indians), ₹300 (Foreigners)',
      rating: 4.3,
      culturalSignificance: 'Central Museum of Rajasthan preserving the state\'s rich cultural heritage and artistic traditions.',
      bestTimeToVisit: 'Any time of day, evening for beautiful exterior lighting'
    },
    {
      id: 'nahargarh-fort',
      name: 'Nahargarh Fort',
      category: 'fort',
      distance: '8.5 km',
      duration: '20 minutes',
      description: 'Hilltop fort offering panoramic views of Jaipur city, built as a retreat for the royal family with beautiful sunset views.',
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Panoramic city views',
        'Madhavendra Bhawan palace',
        'Sunset point and restaurant',
        'Bollywood movie filming location'
      ],
      openingHours: '10:00 AM - 5:30 PM',
      entryFee: '₹30 (Indians), ₹80 (Foreigners)',
      rating: 4.5,
      culturalSignificance: 'Part of Jaipur\'s defensive ring, offering insights into Rajput military strategy and royal leisure.',
      bestTimeToVisit: 'Late afternoon for sunset views and cooler weather'
    }
  ];

  const localFestivals: Festival[] = [
    {
      id: 'jaipur-literature-festival',
      name: 'Jaipur Literature Festival',
      date: 'January 25-29, 2024',
      duration: '5 days',
      description: 'World\'s largest free literary festival bringing together renowned authors, poets, and thinkers from around the globe.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Diggi Palace & Various Venues',
      highlights: [
        'International authors and speakers',
        'Book launches and readings',
        'Cultural performances',
        'Literary discussions and debates'
      ],
      culturalContext: 'Celebrates literature, arts, and cultural exchange, making Jaipur a global literary destination.',
      ticketPrice: 'Free entry to most sessions'
    },
    {
      id: 'teej-festival',
      name: 'Teej Festival',
      date: 'August 15-16, 2024',
      duration: '2 days',
      description: 'Traditional monsoon festival celebrating marital bliss and the arrival of rains, marked by colorful processions and folk performances.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Throughout Jaipur City',
      highlights: [
        'Colorful processions with decorated idols',
        'Traditional folk songs and dances',
        'Henna application ceremonies',
        'Special swings and decorations'
      ],
      culturalContext: 'Ancient Hindu festival celebrating the monsoon season and marital harmony, deeply rooted in Rajasthani culture.',
      ticketPrice: 'Free public celebrations'
    },
    {
      id: 'diwali-celebration',
      name: 'Diwali Festival of Lights',
      date: 'November 12-16, 2024',
      duration: '5 days',
      description: 'Grand celebration of the festival of lights with illuminated palaces, fireworks, and traditional ceremonies throughout the city.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'City-wide celebrations',
      highlights: [
        'Illuminated monuments and palaces',
        'Traditional rangoli competitions',
        'Fireworks displays',
        'Special cultural programs'
      ],
      culturalContext: 'Most important Hindu festival symbolizing victory of light over darkness, celebrated with great fervor in Rajasthan.',
      ticketPrice: 'Free public celebrations, special events ₹500-2000'
    },
    {
      id: 'holi-festival',
      name: 'Holi - Festival of Colors',
      date: 'March 13-14, 2024',
      duration: '2 days',
      description: 'Vibrant spring festival celebrated with colors, music, and traditional delicacies, marking the arrival of spring season.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'City Palace and public spaces',
      highlights: [
        'Color throwing celebrations',
        'Traditional folk music and dance',
        'Special Holi delicacies',
        'Royal Holi celebrations at palaces'
      ],
      culturalContext: 'Ancient spring festival celebrating love, forgiveness, and the triumph of good over evil.',
      ticketPrice: 'Free public celebrations, palace events ₹1000-3000'
    }
  ];

  const transportOptions: TransportOption[] = [
    {
      id: 'airport-transfer',
      type: 'air',
      name: 'Jaipur International Airport',
      distance: '15 km',
      duration: '25-30 minutes',
      cost: '₹800-1200 (Taxi), ₹2500 (Hotel Transfer)',
      description: 'Modern international airport with direct flights to major Indian cities and international destinations.',
      icon: Plane,
      frequency: '100+ daily flights',
      bookingInfo: 'Hotel transfer available on request, advance booking recommended'
    },
    {
      id: 'railway-station',
      type: 'rail',
      name: 'Jaipur Junction Railway Station',
      distance: '8 km',
      duration: '20-25 minutes',
      cost: '₹400-600 (Taxi), ₹1800 (Hotel Transfer)',
      description: 'Major railway junction connecting Jaipur to all major Indian cities with regular express and superfast trains.',
      icon: Train,
      frequency: '200+ daily trains',
      bookingInfo: 'Pre-paid taxi counters available, hotel pickup can be arranged'
    },
    {
      id: 'bus-terminal',
      type: 'road',
      name: 'Sindhi Camp Bus Terminal',
      distance: '6 km',
      duration: '15-20 minutes',
      cost: '₹300-500 (Taxi), ₹1500 (Hotel Transfer)',
      description: 'Main bus terminal with regular services to Delhi, Mumbai, Agra, and other major cities in North India.',
      icon: Car,
      frequency: 'Every 30 minutes to major cities',
      bookingInfo: 'State and private bus services available, advance booking recommended for luxury buses'
    },
    {
      id: 'local-transport',
      type: 'local',
      name: 'Local Transportation',
      distance: 'City-wide',
      duration: 'Varies',
      cost: '₹10-50 (Auto), ₹200-500 (Taxi per hour)',
      description: 'Auto-rickshaws, taxis, and app-based cabs available throughout the city for local sightseeing.',
      icon: Navigation,
      frequency: 'Available 24/7',
      bookingInfo: 'Ola, Uber available, hotel can arrange dedicated vehicles for sightseeing'
    }
  ];

  const attractionCategories = [
    { id: 'all', name: 'All Attractions', icon: Star },
    { id: 'palace', name: 'Palaces', icon: Building },
    { id: 'fort', name: 'Forts', icon: Mountain },
    { id: 'monument', name: 'Monuments', icon: Award },
    { id: 'museum', name: 'Museums', icon: Camera }
  ];

  const filteredAttractions = attractionFilter === 'all' 
    ? nearbyAttractions 
    : nearbyAttractions.filter(attraction => attraction.category === attractionFilter);

  return (
    <section id="location" className="heritage-section bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-royal-gold/10 border border-royal-gold/30 rounded-full px-6 py-2 mb-6">
            <MapPin className="w-5 h-5 text-royal-gold" />
            <span className="text-royal-gold font-semibold">Prime Heritage Location</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black royal-text-gradient mb-6 text-shadow-royal">
            Location & Attractions
          </h2>
          <div className="heritage-divider mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover the cultural treasures surrounding Heritage Royale. Located in the heart of Jaipur's 
            <span className="font-bold text-royal-maroon"> Royal Heritage District</span>, you're minutes away 
            from magnificent palaces, historic forts, and vibrant cultural experiences.
          </p>
        </div>

        {/* Cultural Significance */}
        <div className="mb-20">
          <Card className="bg-royal-gradient text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-heritage-pattern opacity-20"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="w-10 h-10" />
                  <h3 className="text-3xl font-serif font-bold">Cultural Heart of Rajasthan</h3>
                </div>
                <p className="text-xl mb-6 leading-relaxed">
                  Heritage Royale sits at the crossroads of history, where ancient trade routes converged and 
                  royal dynasties flourished. This location has witnessed over 300 years of cultural evolution, 
                  making it the perfect base for exploring Rajasthan's golden heritage.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-1">300+</div>
                    <div className="text-sm opacity-90">Years of History</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">15+</div>
                    <div className="text-sm opacity-90">Heritage Sites</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">5</div>
                    <div className="text-sm opacity-90">UNESCO Sites Nearby</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">2.5km</div>
                    <div className="text-sm opacity-90">To City Palace</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button
                  onClick={() => setIsMapOpen(true)}
                  variant="outline"
                  size="lg"
                  icon={MapPin}
                  className="border-white text-white hover:bg-white hover:text-royal-maroon font-bold mb-4"
                >
                  Explore Interactive Map
                </Button>
                <p className="text-sm opacity-90">
                  Discover nearby attractions, transportation, and cultural sites
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Nearby Attractions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Camera className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Nearby Attractions</h3>
            </div>
            <p className="text-lg text-gray-600 mb-6">Explore magnificent heritage sites within minutes of the hotel</p>
            
            {/* Attraction Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {attractionCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setAttractionFilter(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 animate-fade-in ${
                    attractionFilter === category.id
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map((attraction, index) => (
              <Card
                key={attraction.id}
                className="group cursor-pointer overflow-hidden animate-fade-in"
                padding="none"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedAttraction(attraction)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-royal-gradient/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {attraction.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-royal-maroon text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {attraction.rating}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Camera className="w-8 h-8 text-royal-gold mx-auto mb-2" />
                      <p className="text-royal-maroon font-semibold">Explore Details</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-royal-maroon mb-2 line-clamp-2">
                    {attraction.name}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-royal-gold" />
                        {attraction.distance}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-royal-gold" />
                        {attraction.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {attraction.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-royal-maroon">
                      {attraction.entryFee.split(',')[0]}
                    </span>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAttraction(attraction);
                      }}
                      variant="outline"
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Local Festivals */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calendar className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Local Festivals & Events</h3>
            </div>
            <p className="text-lg text-gray-600">Experience vibrant cultural celebrations throughout the year</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {localFestivals.map((festival, index) => (
              <Card
                key={festival.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedFestival(festival)}
              >
                <div className="flex gap-4">
                  <img
                    src={festival.image}
                    alt={festival.name}
                    className="w-24 h-24 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-xl text-royal-maroon mb-2">
                      {festival.name}
                    </h4>
                    <div className="space-y-1 mb-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-royal-gold" />
                        {festival.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-royal-gold" />
                        {festival.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-royal-gold" />
                        {festival.location}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-2 mb-3">
                      {festival.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-royal-maroon">
                        {festival.ticketPrice}
                      </span>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFestival(festival);
                        }}
                        variant="outline"
                        size="sm"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Transportation Options */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Route className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Getting Here</h3>
            </div>
            <p className="text-lg text-gray-600">Multiple convenient transportation options to reach Heritage Royale</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportOptions.map((transport, index) => (
              <Card
                key={transport.id}
                className="text-center group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedTransport(transport)}
              >
                <div className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <transport.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">
                  {transport.name}
                </h4>
                <div className="space-y-1 mb-4 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-1 text-royal-gold" />
                    {transport.distance}
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1 text-royal-gold" />
                    {transport.duration}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {transport.description}
                </p>
                <div className="text-center">
                  <p className="font-semibold text-royal-maroon text-sm mb-2">
                    {transport.cost}
                  </p>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTransport(transport);
                    }}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Location Benefits */}
        <div className="text-center">
          <Card className="bg-heritage-50">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <TreePine className="w-12 h-12 text-royal-gold mx-auto mb-4" />
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-2">
                  Heritage District
                </h4>
                <p className="text-gray-700">
                  Located in the heart of Jaipur's UNESCO World Heritage area with walking access to major monuments.
                </p>
              </div>
              <div className="text-center">
                <Compass className="w-12 h-12 text-royal-gold mx-auto mb-4" />
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-2">
                  Central Location
                </h4>
                <p className="text-gray-700">
                  Perfect base for exploring Rajasthan with easy access to transportation hubs and cultural sites.
                </p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-royal-gold mx-auto mb-4" />
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-2">
                  Cultural Immersion
                </h4>
                <p className="text-gray-700">
                  Surrounded by authentic local markets, traditional crafts, and vibrant street life of old Jaipur.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Interactive Map Modal */}
      <Modal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        title="Heritage District Interactive Map"
        size="xl"
      >
        <div className="space-y-6">
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-600 mb-2">Interactive Heritage Map</h4>
              <p className="text-gray-500">Detailed map with attractions, routes, and cultural sites</p>
            </div>
            {/* Map markers */}
            <div className="absolute top-4 left-4 bg-royal-gold text-white p-2 rounded-full">
              <Building className="w-4 h-4" />
            </div>
            <div className="absolute top-12 right-8 bg-royal-maroon text-white p-2 rounded-full">
              <Mountain className="w-4 h-4" />
            </div>
            <div className="absolute bottom-8 left-12 bg-royal-crimson text-white p-2 rounded-full">
              <Camera className="w-4 h-4" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearbyAttractions.slice(0, 4).map((attraction) => (
              <button
                key={attraction.id}
                className="text-left p-3 rounded-lg border hover:border-royal-gold hover:bg-royal-gold/5 transition-colors"
                onClick={() => setSelectedAttraction(attraction)}
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-16 object-cover rounded mb-2"
                />
                <p className="text-sm font-semibold text-royal-maroon">{attraction.name}</p>
                <p className="text-xs text-gray-600">{attraction.distance}</p>
              </button>
            ))}
          </div>
        </div>
      </Modal>

      {/* Attraction Details Modal */}
      {selectedAttraction && (
        <Modal
          isOpen={!!selectedAttraction}
          onClose={() => setSelectedAttraction(null)}
          title={selectedAttraction.name}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedAttraction.image}
              alt={selectedAttraction.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Visit Information</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">Distance:</span>
                    <span>{selectedAttraction.distance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Travel Time:</span>
                    <span>{selectedAttraction.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Opening Hours:</span>
                    <span>{selectedAttraction.openingHours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Entry Fee:</span>
                    <span>{selectedAttraction.entryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Rating:</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-royal-gold fill-current mr-1" />
                      <span>{selectedAttraction.rating}/5</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Best Time:</span>
                    <span className="text-right">{selectedAttraction.bestTimeToVisit}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Highlights</h4>
                <ul className="space-y-2 mb-6">
                  {selectedAttraction.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-heritage-50 p-4 rounded-lg">
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">Description</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedAttraction.description}
                </p>
              </div>
              
              <div className="bg-royal-gold/10 p-4 rounded-lg">
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">Cultural Significance</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedAttraction.culturalSignificance}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1"
                icon={MapPin}
              >
                Get Directions
              </Button>
              <Button
                className="flex-1"
                icon={Calendar}
              >
                Plan Visit
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Festival Details Modal */}
      {selectedFestival && (
        <Modal
          isOpen={!!selectedFestival}
          onClose={() => setSelectedFestival(null)}
          title={selectedFestival.name}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedFestival.image}
              alt={selectedFestival.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Festival Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">Date:</span>
                    <span>{selectedFestival.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Duration:</span>
                    <span>{selectedFestival.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Location:</span>
                    <span>{selectedFestival.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Entry:</span>
                    <span>{selectedFestival.ticketPrice}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Festival Highlights</h4>
                <ul className="space-y-2">
                  {selectedFestival.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-heritage-50 p-4 rounded-lg">
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">About the Festival</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedFestival.description}
                </p>
              </div>
              
              <div className="bg-royal-gold/10 p-4 rounded-lg">
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">Cultural Context</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedFestival.culturalContext}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Transport Details Modal */}
      {selectedTransport && (
        <Modal
          isOpen={!!selectedTransport}
          onClose={() => setSelectedTransport(null)}
          title={selectedTransport.name}
          size="md"
        >
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <selectedTransport.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-royal-maroon mb-2">
                {selectedTransport.name}
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-heritage-50 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-royal-gold mx-auto mb-2" />
                  <p className="font-semibold text-royal-maroon">{selectedTransport.distance}</p>
                  <p className="text-sm text-gray-600">Distance</p>
                </div>
                <div className="bg-heritage-50 p-4 rounded-lg">
                  <Clock className="w-6 h-6 text-royal-gold mx-auto mb-2" />
                  <p className="font-semibold text-royal-maroon">{selectedTransport.duration}</p>
                  <p className="text-sm text-gray-600">Travel Time</p>
                </div>
              </div>
              
              <div className="bg-royal-gold/10 p-4 rounded-lg">
                <h4 className="font-semibold text-royal-maroon mb-2">Cost Information</h4>
                <p className="text-gray-700">{selectedTransport.cost}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-royal-maroon mb-2">Description</h4>
                <p className="text-gray-700 leading-relaxed">{selectedTransport.description}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-royal-maroon mb-2">Frequency</h4>
                <p className="text-gray-700">{selectedTransport.frequency}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-royal-maroon mb-2">Booking Information</h4>
                <p className="text-gray-700">{selectedTransport.bookingInfo}</p>
              </div>
            </div>
            
            <Button className="w-full" icon={Car}>
              Arrange Transportation
            </Button>
          </div>
        </Modal>
      )}
    </section>
  );
};