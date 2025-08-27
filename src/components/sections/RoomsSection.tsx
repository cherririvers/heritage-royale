import React, { useState } from 'react';
import { Bed, Users, Wifi, Car, Coffee, Tv, Bath, Wind, Star, Eye, Calendar, MapPin, Crown, Award, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';
import { BookingModal } from '../booking/BookingModal';

interface Room {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  size: string;
  occupancy: string;
  images: string[];
  description: string;
  features: string[];
  amenities: {
    icon: React.ComponentType<any>;
    name: string;
  }[];
  floorPlan: string;
  view: string;
  bedType: string;
  specialOffers?: string[];
}

export const RoomsSection: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);

  const rooms: Room[] = [
    {
      id: 'heritage-room',
      name: 'Heritage Room',
      category: 'Classic Heritage',
      price: 12500,
      originalPrice: 15000,
      size: '350 sq ft',
      occupancy: '2 Adults',
      images: [
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Experience authentic royal heritage in our beautifully appointed Heritage Rooms, featuring traditional Indian décor, handcrafted furniture, and modern amenities. Each room tells a story of our glorious past while ensuring contemporary comfort.',
      features: [
        'Traditional Indian décor with royal motifs',
        'Handcrafted wooden furniture',
        'Heritage artwork and antique pieces',
        'Modern bathroom with premium fixtures',
        'City view with heritage architecture',
        'Complimentary heritage welcome amenities'
      ],
      amenities: [
        { icon: Bed, name: 'King Size Bed' },
        { icon: Wifi, name: 'Free WiFi' },
        { icon: Tv, name: '55" Smart TV' },
        { icon: Coffee, name: 'Tea/Coffee Maker' },
        { icon: Wind, name: 'Air Conditioning' },
        { icon: Bath, name: 'Premium Bathroom' }
      ],
      floorPlan: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
      view: 'Heritage City View',
      bedType: 'King Size Heritage Bed',
      specialOffers: ['Early Bird: 20% Off', 'Extended Stay: 3rd Night Free']
    },
    {
      id: 'royal-suite',
      name: 'Royal Suite',
      category: 'Premium Heritage',
      price: 18500,
      originalPrice: 22000,
      size: '550 sq ft',
      occupancy: '2-3 Adults',
      images: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Indulge in royal luxury with our Royal Suites, featuring separate living areas, palace views, and personalized butler service. These suites offer the perfect blend of heritage grandeur and contemporary sophistication.',
      features: [
        'Separate living and sleeping areas',
        'Private balcony with palace garden views',
        'Dedicated butler service',
        'Royal dining area with heritage crockery',
        'Marble bathroom with jacuzzi',
        'Exclusive access to Royal Lounge'
      ],
      amenities: [
        { icon: Crown, name: 'Butler Service' },
        { icon: Bed, name: 'Royal King Bed' },
        { icon: Users, name: 'Separate Living Area' },
        { icon: Bath, name: 'Jacuzzi & Rain Shower' },
        { icon: Coffee, name: 'Premium Minibar' },
        { icon: Car, name: 'Valet Parking' }
      ],
      floorPlan: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
      view: 'Palace Garden View',
      bedType: 'Royal Heritage King Bed',
      specialOffers: ['Honeymoon Package: Romantic Setup', 'Anniversary Special: Champagne & Flowers']
    },
    {
      id: 'palace-chamber',
      name: 'Palace Chamber',
      category: 'Ultra Luxury Heritage',
      price: 25000,
      originalPrice: 30000,
      size: '750 sq ft',
      occupancy: '2-4 Adults',
      images: [
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Experience the pinnacle of royal luxury in our Palace Chambers, originally designed for visiting royalty. These magnificent suites feature authentic royal furnishings, private terraces, and unparalleled personalized service.',
      features: [
        'Authentic royal furnishings and artifacts',
        'Private terrace with panoramic palace views',
        'Personal concierge and butler team',
        'Royal dining room with heritage table settings',
        'Master bathroom with gold fixtures',
        'Complimentary cultural experiences and tours'
      ],
      amenities: [
        { icon: Crown, name: 'Royal Concierge' },
        { icon: Award, name: 'Heritage Artifacts' },
        { icon: MapPin, name: 'Private Terrace' },
        { icon: Users, name: 'Royal Dining Room' },
        { icon: Car, name: 'Luxury Transport' },
        { icon: Star, name: 'Cultural Experiences' }
      ],
      floorPlan: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400',
      view: 'Panoramic Palace View',
      bedType: 'Maharaja Heritage Bed',
      specialOffers: ['Royal Experience: Cultural Tour Included', 'VIP Package: Airport Transfer & Spa']
    },
    {
      id: 'maharaja-suite',
      name: 'Maharaja Suite',
      category: 'Presidential Heritage',
      price: 35000,
      originalPrice: 42000,
      size: '1200 sq ft',
      occupancy: '2-6 Adults',
      images: [
        'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'The crown jewel of Heritage Royale, the Maharaja Suite was the personal chamber of Maharaja Vikram Singh. This palatial suite offers an unmatched royal experience with museum-quality artifacts and legendary hospitality.',
      features: [
        'Original Maharaja\'s personal chamber',
        'Museum-quality royal artifacts and paintings',
        'Private royal court with throne seating',
        'Dedicated staff team including chef and valet',
        'Gold-plated bathroom fixtures and marble flooring',
        'Exclusive helicopter transfers and royal experiences'
      ],
      amenities: [
        { icon: Crown, name: 'Royal Staff Team' },
        { icon: Award, name: 'Museum Artifacts' },
        { icon: Users, name: 'Private Royal Court' },
        { icon: Car, name: 'Helicopter Transfer' },
        { icon: Star, name: 'Personal Chef' },
        { icon: Bath, name: 'Gold Fixtures' }
      ],
      floorPlan: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=400',
      view: 'Royal Palace & Gardens',
      bedType: 'Original Maharaja Bed',
      specialOffers: ['Royal Wedding Package', 'Corporate Retreat: Full Suite Access']
    }
  ];

  const nextImage = () => {
    if (selectedRoom) {
      setSelectedImageIndex((prev) => 
        prev === selectedRoom.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedRoom) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedRoom.images.length - 1 : prev - 1
      );
    }
  };

  const openRoomDetails = (room: Room) => {
    setSelectedRoom(room);
    setSelectedImageIndex(0);
  };

  return (
    <section id="rooms" className="heritage-section bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-royal-gold/10 border border-royal-gold/30 rounded-full px-6 py-2 mb-6">
            <Bed className="w-5 h-5 text-royal-gold" />
            <span className="text-royal-gold font-semibold">Luxury Accommodations</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black royal-text-gradient mb-6 text-shadow-royal">
            Rooms & Suites
          </h2>
          <div className="heritage-divider mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Choose from our collection of heritage accommodations, each uniquely designed to offer you an authentic 
            <span className="font-bold text-royal-maroon"> royal experience</span> with modern luxury amenities and personalized service.
          </p>
        </div>

        {/* Room Categories Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {['Classic Heritage', 'Premium Heritage', 'Ultra Luxury Heritage', 'Presidential Heritage'].map((category, index) => (
            <Card key={category} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif font-bold text-lg text-royal-maroon mb-2">{category}</h3>
              <p className="text-gray-600 text-sm">
                {index === 0 && 'Traditional comfort with heritage charm'}
                {index === 1 && 'Enhanced luxury with royal amenities'}
                {index === 2 && 'Ultimate heritage experience'}
                {index === 3 && 'Unparalleled royal grandeur'}
              </p>
            </Card>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {rooms.map((room, index) => (
            <Card
              key={room.id}
              className="group cursor-pointer overflow-hidden animate-fade-in"
              padding="none"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => openRoomDetails(room)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-royal-gradient/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {room.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {room.originalPrice && (
                    <div className="bg-royal-crimson text-white px-3 py-1 rounded-full text-sm font-bold">
                      Save ₹{(room.originalPrice - room.price).toLocaleString()}
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Eye className="w-8 h-8 text-royal-gold mx-auto mb-2" />
                    <p className="text-royal-maroon font-semibold">View Details</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-royal-maroon mb-1">
                      {room.name}
                    </h3>
                    <p className="text-gray-600 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {room.view}
                    </p>
                  </div>
                  <div className="text-right">
                    {room.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        ₹{room.originalPrice.toLocaleString()}
                      </div>
                    )}
                    <div className="text-2xl font-bold text-royal-maroon">
                      ₹{room.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-2">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-royal-gold" />
                    {room.occupancy}
                  </div>
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-2 text-royal-gold" />
                    {room.size}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.slice(0, 3).map((amenity, idx) => (
                    <div key={idx} className="flex items-center bg-heritage-50 px-3 py-1 rounded-full text-sm">
                      <amenity.icon className="w-3 h-3 mr-1 text-royal-gold" />
                      {amenity.name}
                    </div>
                  ))}
                  {room.amenities.length > 3 && (
                    <div className="bg-royal-gold/10 px-3 py-1 rounded-full text-sm text-royal-gold font-semibold">
                      +{room.amenities.length - 3} more
                    </div>
                  )}
                </div>

                {room.specialOffers && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {room.specialOffers.map((offer, idx) => (
                        <span key={idx} className="bg-royal-crimson text-white px-2 py-1 rounded text-xs font-semibold">
                          {offer}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      openRoomDetails(room);
                    }}
                    variant="outline"
                    className="flex-1"
                  >
                    View Details
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsBookingOpen(true);
                    }}
                    className="flex-1"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Packages */}
        <div className="text-center">
          <Card className="bg-royal-gradient p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-heritage-pattern opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Award className="w-10 h-10" />
                <h3 className="text-3xl font-serif font-bold">Special Heritage Packages</h3>
              </div>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Enhance your royal experience with our curated heritage packages including cultural tours, 
                traditional performances, and exclusive dining experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-royal-maroon font-bold"
                >
                  View All Packages
                </Button>
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/20 font-bold"
                >
                  Customize Your Stay
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <Modal
          isOpen={!!selectedRoom}
          onClose={() => setSelectedRoom(null)}
          size="xl"
        >
          <div className="space-y-6">
            {/* Image Gallery */}
            <div className="relative">
              <img
                src={selectedRoom.images[selectedImageIndex]}
                alt={selectedRoom.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {selectedRoom.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === selectedImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Room Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-royal-maroon mb-2">
                      {selectedRoom.name}
                    </h3>
                    <p className="text-royal-gold font-semibold">{selectedRoom.category}</p>
                  </div>
                  <div className="text-right">
                    {selectedRoom.originalPrice && (
                      <div className="text-lg text-gray-500 line-through">
                        ₹{selectedRoom.originalPrice.toLocaleString()}
                      </div>
                    )}
                    <div className="text-3xl font-bold text-royal-maroon">
                      ₹{selectedRoom.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">per night + taxes</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedRoom.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-heritage-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-royal-gold mr-2" />
                      <span className="font-semibold">Occupancy</span>
                    </div>
                    <p className="text-gray-600">{selectedRoom.occupancy}</p>
                  </div>
                  <div className="bg-heritage-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Bed className="w-5 h-5 text-royal-gold mr-2" />
                      <span className="font-semibold">Room Size</span>
                    </div>
                    <p className="text-gray-600">{selectedRoom.size}</p>
                  </div>
                  <div className="bg-heritage-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-royal-gold mr-2" />
                      <span className="font-semibold">View</span>
                    </div>
                    <p className="text-gray-600">{selectedRoom.view}</p>
                  </div>
                  <div className="bg-heritage-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Bed className="w-5 h-5 text-royal-gold mr-2" />
                      <span className="font-semibold">Bed Type</span>
                    </div>
                    <p className="text-gray-600">{selectedRoom.bedType}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Room Features</h4>
                <ul className="space-y-2 mb-6">
                  {selectedRoom.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Amenities</h4>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selectedRoom.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <amenity.icon className="w-4 h-4 text-royal-gold mr-2" />
                      <span className="text-gray-700 text-sm">{amenity.name}</span>
                    </div>
                  ))}
                </div>

                {selectedRoom.specialOffers && (
                  <div>
                    <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Special Offers</h4>
                    <div className="space-y-2 mb-6">
                      {selectedRoom.specialOffers.map((offer, index) => (
                        <div key={index} className="bg-royal-crimson text-white px-3 py-2 rounded-lg text-sm font-semibold">
                          {offer}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t">
              <Button
                onClick={() => setIsFloorPlanOpen(true)}
                variant="outline"
                className="flex-1"
                icon={Camera}
              >
                View Floor Plan
              </Button>
              <Button
                onClick={() => {
                  setSelectedRoom(null);
                  setIsBookingOpen(true);
                }}
                className="flex-1"
                icon={Calendar}
              >
                Book This Room
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Floor Plan Modal */}
      <Modal
        isOpen={isFloorPlanOpen}
        onClose={() => setIsFloorPlanOpen(false)}
        title="Interactive Floor Plan"
        size="lg"
      >
        <div className="space-y-4">
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-600 mb-2">Interactive Floor Plan</h4>
              <p className="text-gray-500">Detailed room layout would be displayed here</p>
            </div>
          </div>
          <div className="text-center">
            <Button onClick={() => setIsFloorPlanOpen(false)}>
              Close Floor Plan
            </Button>
          </div>
        </div>
      </Modal>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};