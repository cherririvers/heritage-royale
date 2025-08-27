import React, { useState } from 'react';
import { Calendar, Music, Camera, Users, Clock, MapPin, Star, ChevronRight, Play, Award, Crown, Palette, ChefHat, BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';

interface CulturalEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  highlights: string[];
  location: string;
  capacity: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  includes: string[];
}

interface Workshop {
  id: string;
  title: string;
  type: 'cooking' | 'crafts' | 'music' | 'dance';
  instructor: string;
  price: number;
  duration: string;
  image: string;
  description: string;
  whatYouLearn: string[];
  materials: string[];
  schedule: string[];
}

export const ExperiencesSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CulturalEvent | null>(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const culturalEvents: CulturalEvent[] = [
    {
      id: 'classical-evening',
      title: 'Royal Classical Music Evening',
      category: 'performance',
      date: '2024-03-20',
      time: '7:00 PM',
      duration: '2 hours',
      price: 1500,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience the grandeur of Indian classical music in our Royal Durbar Hall, featuring renowned artists performing traditional ragas and compositions that once entertained the Maharajas.',
      highlights: [
        'Live sitar and tabla performance',
        'Traditional royal court music',
        'Heritage venue with authentic acoustics',
        'Welcome drink and royal refreshments'
      ],
      location: 'Royal Durbar Hall',
      capacity: 80,
      difficulty: 'All Levels',
      includes: ['Welcome drink', 'Traditional refreshments', 'Program booklet', 'Photo opportunity']
    },
    {
      id: 'heritage-walk',
      title: 'Sunrise Heritage Walk',
      category: 'tour',
      date: '2024-03-21',
      time: '6:00 AM',
      duration: '3 hours',
      price: 800,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Discover the architectural marvels and hidden stories of Heritage Royale with our expert heritage guide, exploring secret passages, royal chambers, and magnificent gardens.',
      highlights: [
        'Expert heritage guide narration',
        'Access to restricted royal chambers',
        'Photography in heritage locations',
        'Traditional breakfast in royal gardens'
      ],
      location: 'Palace Grounds & Gardens',
      capacity: 15,
      difficulty: 'Beginner',
      includes: ['Expert guide', 'Heritage map', 'Traditional breakfast', 'Photography permits']
    },
    {
      id: 'folk-dance',
      title: 'Rajasthani Folk Dance Performance',
      category: 'performance',
      date: '2024-03-22',
      time: '8:00 PM',
      duration: '90 minutes',
      price: 1200,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Witness the vibrant colors and rhythmic movements of traditional Rajasthani folk dances, including Ghoomar, Kalbeliya, and fire dance performances in our marble courtyard.',
      highlights: [
        'Authentic Rajasthani costumes and jewelry',
        'Traditional folk instruments',
        'Interactive dance session',
        'Royal dinner under the stars'
      ],
      location: 'Marble Courtyard',
      capacity: 100,
      difficulty: 'All Levels',
      includes: ['Performance viewing', 'Interactive session', 'Royal dinner', 'Cultural program']
    },
    {
      id: 'cooking-masterclass',
      title: 'Royal Kitchen Masterclass',
      category: 'workshop',
      date: '2024-03-23',
      time: '10:00 AM',
      duration: '4 hours',
      price: 2500,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Learn the secrets of royal Rajasthani cuisine from our master chef, preparing traditional dishes that were once served to the Maharajas in our heritage kitchen.',
      highlights: [
        'Hands-on cooking with master chef',
        'Traditional royal recipes',
        'Heritage kitchen tour',
        'Full royal meal experience'
      ],
      location: 'Heritage Kitchen',
      capacity: 12,
      difficulty: 'Intermediate',
      includes: ['All ingredients', 'Recipe booklet', 'Apron and utensils', 'Full meal']
    },
    {
      id: 'art-workshop',
      title: 'Miniature Painting Workshop',
      category: 'workshop',
      date: '2024-03-24',
      time: '2:00 PM',
      duration: '3 hours',
      price: 1800,
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Create your own miniature painting masterpiece using traditional techniques and natural pigments, guided by a master artist in our heritage library.',
      highlights: [
        'Traditional painting techniques',
        'Natural pigments and gold leaf',
        'Personal artwork to take home',
        'Art history and cultural context'
      ],
      location: 'Heritage Library',
      capacity: 8,
      difficulty: 'Beginner',
      includes: ['All art materials', 'Personal artwork', 'Refreshments', 'Certificate']
    },
    {
      id: 'storytelling-evening',
      title: 'Royal Tales & Legends Evening',
      category: 'cultural',
      date: '2024-03-25',
      time: '7:30 PM',
      duration: '2 hours',
      price: 900,
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Journey through centuries of royal history with captivating storytelling sessions featuring legends, folklore, and true tales from the palace archives.',
      highlights: [
        'Professional storyteller performance',
        'Historical palace tales',
        'Interactive Q&A session',
        'Traditional refreshments'
      ],
      location: 'Royal Gardens Pavilion',
      capacity: 50,
      difficulty: 'All Levels',
      includes: ['Storytelling session', 'Historical booklet', 'Refreshments', 'Garden access']
    }
  ];

  const workshops: Workshop[] = [
    {
      id: 'royal-cooking',
      title: 'Royal Rajasthani Cooking',
      type: 'cooking',
      instructor: 'Chef Maharaj Singh',
      price: 2500,
      duration: '4 hours',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Master the art of royal Rajasthani cuisine with authentic recipes passed down through generations of palace chefs.',
      whatYouLearn: [
        'Traditional spice blending techniques',
        'Royal dal preparations',
        'Heritage bread making',
        'Royal dessert crafting'
      ],
      materials: ['All ingredients provided', 'Traditional utensils', 'Recipe booklet', 'Apron'],
      schedule: ['10:00 AM - Introduction & Spice Tour', '11:00 AM - Main Course Preparation', '1:00 PM - Dessert Making', '2:00 PM - Royal Feast']
    },
    {
      id: 'miniature-art',
      title: 'Rajasthani Miniature Painting',
      type: 'crafts',
      instructor: 'Master Artist Ravi Sharma',
      price: 1800,
      duration: '3 hours',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Create exquisite miniature paintings using traditional techniques, natural pigments, and gold leaf work.',
      whatYouLearn: [
        'Traditional brush techniques',
        'Natural pigment preparation',
        'Gold leaf application',
        'Royal motif designs'
      ],
      materials: ['Natural pigments', 'Traditional brushes', 'Gold leaf', 'Handmade paper'],
      schedule: ['2:00 PM - Art History & Techniques', '2:30 PM - Sketch & Design', '3:30 PM - Painting & Detailing', '4:30 PM - Gold Leaf Work']
    },
    {
      id: 'classical-music',
      title: 'Indian Classical Music Basics',
      type: 'music',
      instructor: 'Pandit Arun Mishra',
      price: 2000,
      duration: '2.5 hours',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Introduction to Indian classical music theory and practice with hands-on tabla and harmonium lessons.',
      whatYouLearn: [
        'Basic ragas and talas',
        'Tabla rhythm patterns',
        'Harmonium basics',
        'Classical music appreciation'
      ],
      materials: ['Tabla set', 'Harmonium', 'Music notation sheets', 'Practice recordings'],
      schedule: ['4:00 PM - Music Theory', '4:45 PM - Tabla Practice', '5:30 PM - Harmonium Basics', '6:00 PM - Group Performance']
    },
    {
      id: 'folk-dance',
      title: 'Rajasthani Folk Dance',
      type: 'dance',
      instructor: 'Guru Meera Devi',
      price: 1500,
      duration: '2 hours',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn traditional Rajasthani folk dances including Ghoomar and Kalbeliya with authentic costumes and music.',
      whatYouLearn: [
        'Ghoomar dance steps',
        'Traditional hand movements',
        'Folk dance rhythms',
        'Cultural significance'
      ],
      materials: ['Traditional costumes', 'Jewelry accessories', 'Music system', 'Dance props'],
      schedule: ['6:00 PM - Warm-up & Basics', '6:30 PM - Ghoomar Steps', '7:15 PM - Advanced Moves', '7:45 PM - Group Performance']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Experiences', icon: Star },
    { id: 'performance', name: 'Performances', icon: Music },
    { id: 'tour', name: 'Heritage Tours', icon: MapPin },
    { id: 'workshop', name: 'Workshops', icon: Palette },
    { id: 'cultural', name: 'Cultural Events', icon: Crown }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? culturalEvents 
    : culturalEvents.filter(event => event.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="experiences" className="heritage-section bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-royal-gold/10 border border-royal-gold/30 rounded-full px-6 py-2 mb-6">
            <Music className="w-5 h-5 text-royal-gold" />
            <span className="text-royal-gold font-semibold">Cultural Immersion</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black royal-text-gradient mb-6 text-shadow-royal">
            Cultural Experiences
          </h2>
          <div className="heritage-divider mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Immerse yourself in the rich cultural heritage of India through our curated experiences, from 
            <span className="font-bold text-royal-maroon"> traditional performances</span> to hands-on workshops 
            that connect you with centuries-old traditions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 animate-fade-in ${
                selectedCategory === category.id
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

        {/* Events Calendar */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calendar className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Upcoming Events</h3>
            </div>
            <p className="text-lg text-gray-600">Join us for authentic cultural experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <Card
                key={event.id}
                className="group cursor-pointer overflow-hidden animate-fade-in"
                padding="none"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-royal-gradient/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-royal-crimson text-white px-3 py-1 rounded-full text-sm font-bold">
                      ₹{event.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Play className="w-8 h-8 text-royal-gold mx-auto mb-2" />
                      <p className="text-royal-maroon font-semibold">View Details</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif font-bold text-xl text-royal-maroon line-clamp-2">
                      {event.title}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-royal-gold" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-royal-gold" />
                      {event.time} • {event.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-royal-gold" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-royal-gold" />
                      {event.capacity} guests max • {event.difficulty}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="flex gap-3">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEvent(event);
                      }}
                      variant="outline"
                      className="flex-1"
                    >
                      Learn More
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
        </div>

        {/* Workshop Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Palette className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Heritage Workshops</h3>
            </div>
            <p className="text-lg text-gray-600">Learn traditional arts and crafts from master artisans</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshops.map((workshop, index) => (
              <Card
                key={workshop.id}
                className="group cursor-pointer text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedWorkshop(workshop)}
              >
                <div className="relative mb-4">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-royal-gradient/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
                
                <div className="mb-4">
                  {workshop.type === 'cooking' && <ChefHat className="w-8 h-8 text-royal-gold mx-auto mb-2" />}
                  {workshop.type === 'crafts' && <Palette className="w-8 h-8 text-royal-gold mx-auto mb-2" />}
                  {workshop.type === 'music' && <Music className="w-8 h-8 text-royal-gold mx-auto mb-2" />}
                  {workshop.type === 'dance' && <Users className="w-8 h-8 text-royal-gold mx-auto mb-2" />}
                </div>

                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">
                  {workshop.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">with {workshop.instructor}</p>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>{workshop.duration}</span>
                  <span className="font-bold text-royal-maroon">₹{workshop.price.toLocaleString()}</span>
                </div>
                
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedWorkshop(workshop);
                  }}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Cultural Photo Gallery Preview */}
        <div className="text-center">
          <Card className="bg-royal-gradient p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-heritage-pattern opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Camera className="w-10 h-10" />
                <h3 className="text-3xl font-serif font-bold">Cultural Gallery</h3>
              </div>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Explore our rich collection of cultural moments, traditional performances, and heritage celebrations 
                captured through the lens of time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  icon={Camera}
                  className="border-white text-white hover:bg-white hover:text-royal-maroon font-bold"
                >
                  View Gallery
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  icon={BookOpen}
                  className="text-white hover:bg-white/20 font-bold"
                >
                  Cultural Stories
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent.title}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Event Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">Date:</span>
                    <span>{formatDate(selectedEvent.date)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Time:</span>
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Duration:</span>
                    <span>{selectedEvent.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Location:</span>
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Capacity:</span>
                    <span>{selectedEvent.capacity} guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Difficulty:</span>
                    <span>{selectedEvent.difficulty}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-royal-maroon border-t pt-2">
                    <span>Price:</span>
                    <span>₹{selectedEvent.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Experience Highlights</h4>
                <ul className="space-y-2 mb-6">
                  {selectedEvent.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">What's Included</h4>
                <ul className="space-y-2">
                  {selectedEvent.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-heritage-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="flex-1"
                icon={Calendar}
              >
                Book Experience - ₹{selectedEvent.price.toLocaleString()}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Workshop Details Modal */}
      {selectedWorkshop && (
        <Modal
          isOpen={!!selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
          title={selectedWorkshop.title}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedWorkshop.image}
              alt={selectedWorkshop.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Workshop Details</h4>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold">Instructor:</span>
                    <span>{selectedWorkshop.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Duration:</span>
                    <span>{selectedWorkshop.duration}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-royal-maroon border-t pt-2">
                    <span>Price:</span>
                    <span>₹{selectedWorkshop.price.toLocaleString()}</span>
                  </div>
                </div>
                
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">What You'll Learn</h4>
                <ul className="space-y-2">
                  {selectedWorkshop.whatYouLearn.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Materials Provided</h4>
                <ul className="space-y-2 mb-6">
                  {selectedWorkshop.materials.map((material, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{material}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Schedule</h4>
                <ul className="space-y-2">
                  {selectedWorkshop.schedule.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Clock className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-heritage-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {selectedWorkshop.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="flex-1"
                icon={Calendar}
              >
                Book Workshop - ₹{selectedWorkshop.price.toLocaleString()}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Experience Booking Modal */}
      <Modal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Book Cultural Experience"
        size="md"
      >
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-serif font-bold text-royal-maroon mb-2">
              Reserve Your Cultural Experience
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
                  Number of Guests
                </label>
                <select className="royal-input">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
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
                Special Requests (Optional)
              </label>
              <textarea
                className="royal-input h-20 resize-none"
                placeholder="Any special requirements or dietary restrictions..."
              />
            </div>
          </div>
          
          <div className="bg-heritage-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Total Amount:</span>
              <span className="text-2xl font-bold text-royal-maroon">₹2,500</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">*Includes all materials and refreshments</p>
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
                alert('Experience booked successfully! You will receive a confirmation email shortly.');
                setIsBookingOpen(false);
              }}
              className="flex-1"
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};