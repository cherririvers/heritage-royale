import React, { useState } from 'react';
import { ChefHat, Crown, Star, Clock, Users, MapPin, Utensils, Wine, Coffee, Award, Camera, Play, Heart, BookOpen, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  chef: string;
  specialty: string;
  ambiance: string;
  capacity: number;
  priceRange: string;
  timings: string;
  highlights: string[];
  signatureDishes: string[];
  dressCode: string;
  reservationRequired: boolean;
}

interface SignatureDish {
  id: string;
  name: string;
  restaurant: string;
  description: string;
  image: string;
  price: number;
  preparationTime: string;
  ingredients: string[];
  culturalStory: string;
  chefSpecial: boolean;
  dietary: string[];
  spiceLevel: number;
}

interface DiningExperience {
  id: string;
  title: string;
  type: 'private' | 'group' | 'masterclass' | 'tasting';
  description: string;
  image: string;
  duration: string;
  price: number;
  maxGuests: number;
  includes: string[];
  highlights: string[];
  chef: string;
  location: string;
}

export const DiningSection: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [selectedDish, setSelectedDish] = useState<SignatureDish | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<DiningExperience | null>(null);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [cuisineFilter, setCuisineFilter] = useState('all');

  const restaurants: Restaurant[] = [
    {
      id: 'maharaja-dining',
      name: 'Maharaja\'s Royal Dining Hall',
      cuisine: 'Royal Rajasthani',
      description: 'Experience authentic royal Rajasthani cuisine in the original dining hall where Maharajas once feasted, featuring traditional recipes passed down through generations.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      chef: 'Chef Maharaj Ratan Singh',
      specialty: 'Royal Thali & Traditional Curries',
      ambiance: 'Regal dining with heritage décor',
      capacity: 60,
      priceRange: '₹2,500 - ₹4,500',
      timings: '7:00 PM - 11:00 PM',
      highlights: [
        'Original royal dining hall',
        'Traditional royal recipes',
        'Heritage crockery and cutlery',
        'Live folk music during dinner'
      ],
      signatureDishes: ['Royal Laal Maas', 'Maharaja Thali', 'Heritage Dal Baati'],
      dressCode: 'Smart Casual',
      reservationRequired: true
    },
    {
      id: 'garden-pavilion',
      name: 'Garden Pavilion Restaurant',
      cuisine: 'Multi-Cuisine',
      description: 'Al fresco dining in our heritage gardens with a curated menu featuring the best of Indian, Continental, and Asian cuisines in a romantic garden setting.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      chef: 'Chef Priya Sharma',
      specialty: 'Garden-to-Table & Fusion Cuisine',
      ambiance: 'Romantic garden dining under stars',
      capacity: 80,
      priceRange: '₹1,800 - ₹3,200',
      timings: '6:30 PM - 10:30 PM',
      highlights: [
        'Open-air garden setting',
        'Farm-to-table ingredients',
        'Romantic candlelit ambiance',
        'Live acoustic performances'
      ],
      signatureDishes: ['Tandoori Platter', 'Garden Fresh Salads', 'Fusion Curries'],
      dressCode: 'Casual',
      reservationRequired: false
    },
    {
      id: 'spice-route',
      name: 'The Spice Route',
      cuisine: 'Pan-Indian',
      description: 'Journey through India\'s diverse culinary landscape with authentic regional specialties from Kashmir to Kerala, prepared by expert chefs from each region.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      chef: 'Chef Vikram Khanna',
      specialty: 'Regional Indian Specialties',
      ambiance: 'Contemporary Indian with spice market décor',
      capacity: 100,
      priceRange: '₹1,500 - ₹2,800',
      timings: '12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM',
      highlights: [
        'Regional chefs from across India',
        'Authentic spice blends',
        'Interactive spice station',
        'Regional cooking demonstrations'
      ],
      signatureDishes: ['Kerala Fish Curry', 'Kashmiri Wazwan', 'Bengali Fish Thali'],
      dressCode: 'Smart Casual',
      reservationRequired: true
    },
    {
      id: 'royal-lounge',
      name: 'Royal Heritage Lounge',
      cuisine: 'Light Bites & Beverages',
      description: 'Elegant lounge serving premium teas, artisanal coffees, and light bites in a sophisticated setting with heritage books and royal memorabilia.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      chef: 'Chef Anita Mehra',
      specialty: 'High Tea & Artisanal Beverages',
      ambiance: 'Sophisticated lounge with library setting',
      capacity: 40,
      priceRange: '₹800 - ₹1,500',
      timings: '10:00 AM - 8:00 PM',
      highlights: [
        'Premium tea collection',
        'Artisanal coffee blends',
        'Heritage library setting',
        'Royal high tea service'
      ],
      signatureDishes: ['Royal High Tea', 'Heritage Coffee Blends', 'Artisan Pastries'],
      dressCode: 'Casual',
      reservationRequired: false
    }
  ];

  const signatureDishes: SignatureDish[] = [
    {
      id: 'royal-laal-maas',
      name: 'Royal Laal Maas',
      restaurant: 'Maharaja\'s Royal Dining Hall',
      description: 'The crown jewel of Rajasthani cuisine, this fiery red mutton curry was originally prepared for the royal hunts, featuring tender meat in a rich, spicy gravy.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 1850,
      preparationTime: '45 minutes',
      ingredients: ['Tender mutton', 'Mathania red chilies', 'Yogurt', 'Royal spices', 'Ghee'],
      culturalStory: 'Originally created for Maharaja Vikram Singh after successful hunting expeditions, this dish represents the warrior spirit and royal hospitality of Rajasthan.',
      chefSpecial: true,
      dietary: ['Non-Vegetarian', 'Gluten-Free'],
      spiceLevel: 4
    },
    {
      id: 'maharaja-thali',
      name: 'Maharaja\'s Royal Thali',
      restaurant: 'Maharaja\'s Royal Dining Hall',
      description: 'A grand feast fit for royalty, featuring 12 traditional dishes served on heritage silver platters, representing the complete royal dining experience.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 2500,
      preparationTime: '30 minutes',
      ingredients: ['Assorted curries', 'Dal varieties', 'Breads', 'Rice', 'Desserts', 'Pickles'],
      culturalStory: 'This elaborate thali recreates the royal dining experience, with each dish representing different regions of the kingdom and seasonal ingredients.',
      chefSpecial: true,
      dietary: ['Vegetarian Option Available'],
      spiceLevel: 3
    },
    {
      id: 'heritage-dal-baati',
      name: 'Heritage Dal Baati Churma',
      restaurant: 'Maharaja\'s Royal Dining Hall',
      description: 'The quintessential Rajasthani comfort food elevated to royal standards, featuring perfectly baked baatis with five varieties of dal and sweet churma.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 1200,
      preparationTime: '40 minutes',
      ingredients: ['Wheat flour baatis', 'Five dal varieties', 'Jaggery churma', 'Pure ghee'],
      culturalStory: 'A dish that sustained warriors and royalty alike, representing the hearty and nutritious cuisine of the desert kingdom.',
      chefSpecial: false,
      dietary: ['Vegetarian'],
      spiceLevel: 2
    },
    {
      id: 'tandoori-platter',
      name: 'Royal Tandoori Platter',
      restaurant: 'Garden Pavilion Restaurant',
      description: 'An assortment of perfectly marinated meats and vegetables cooked in our traditional clay tandoor, served with mint chutney and fresh naan.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 1650,
      preparationTime: '35 minutes',
      ingredients: ['Chicken tikka', 'Seekh kebabs', 'Paneer tikka', 'Tandoori vegetables'],
      culturalStory: 'The tandoor cooking method, perfected in royal kitchens, creates the perfect balance of smoky flavors and tender textures.',
      chefSpecial: true,
      dietary: ['Non-Vegetarian', 'Vegetarian Options'],
      spiceLevel: 3
    },
    {
      id: 'kerala-fish-curry',
      name: 'Kerala Fish Curry',
      restaurant: 'The Spice Route',
      description: 'Authentic coastal delicacy featuring fresh fish in coconut milk gravy with curry leaves and traditional Kerala spices, served with appam.',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 1450,
      preparationTime: '25 minutes',
      ingredients: ['Fresh fish', 'Coconut milk', 'Curry leaves', 'Kerala spices', 'Tamarind'],
      culturalStory: 'This dish represents the coastal culinary traditions of Kerala, where spices and coconut create harmony in every bite.',
      chefSpecial: false,
      dietary: ['Non-Vegetarian', 'Gluten-Free'],
      spiceLevel: 3
    },
    {
      id: 'royal-high-tea',
      name: 'Royal Heritage High Tea',
      restaurant: 'Royal Heritage Lounge',
      description: 'An elegant afternoon tea service featuring premium Darjeeling tea, delicate sandwiches, scones, and royal pastries served on fine china.',
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 950,
      preparationTime: '15 minutes',
      ingredients: ['Premium Darjeeling tea', 'Finger sandwiches', 'Fresh scones', 'Royal pastries'],
      culturalStory: 'Inspired by the British colonial influence on royal dining, this high tea service maintains the elegance of bygone eras.',
      chefSpecial: false,
      dietary: ['Vegetarian'],
      spiceLevel: 0
    }
  ];

  const diningExperiences: DiningExperience[] = [
    {
      id: 'chefs-table',
      title: 'Chef\'s Table Experience',
      type: 'private',
      description: 'Intimate dining experience with our head chef, featuring a personalized 7-course tasting menu with wine pairings and cooking insights.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '3 hours',
      price: 8500,
      maxGuests: 8,
      includes: ['7-course tasting menu', 'Wine pairings', 'Chef interaction', 'Recipe cards'],
      highlights: [
        'Exclusive kitchen access',
        'Personalized menu creation',
        'Wine sommelier guidance',
        'Take-home recipe collection'
      ],
      chef: 'Chef Maharaj Ratan Singh',
      location: 'Private Chef\'s Kitchen'
    },
    {
      id: 'royal-cooking-class',
      title: 'Royal Cooking Masterclass',
      type: 'masterclass',
      description: 'Learn to prepare authentic royal Rajasthani dishes with our master chef, including hands-on cooking and a full meal experience.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '4 hours',
      price: 3500,
      maxGuests: 12,
      includes: ['Hands-on cooking', 'All ingredients', 'Recipe booklet', 'Full meal', 'Apron'],
      highlights: [
        'Traditional cooking techniques',
        'Spice blending secrets',
        'Royal recipe collection',
        'Certificate of completion'
      ],
      chef: 'Chef Maharaj Ratan Singh',
      location: 'Heritage Teaching Kitchen'
    },
    {
      id: 'garden-dinner',
      title: 'Private Garden Dinner',
      type: 'private',
      description: 'Romantic candlelit dinner in our heritage gardens with personalized menu, live music, and dedicated service for special occasions.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2.5 hours',
      price: 12500,
      maxGuests: 4,
      includes: ['Private garden setup', 'Customized menu', 'Live acoustic music', 'Floral arrangements'],
      highlights: [
        'Exclusive garden pavilion',
        'Candlelit romantic setting',
        'Personal butler service',
        'Photography session'
      ],
      chef: 'Chef Priya Sharma',
      location: 'Private Garden Pavilion'
    },
    {
      id: 'spice-tasting',
      title: 'Royal Spice Tasting Journey',
      type: 'tasting',
      description: 'Guided exploration of Indian spices with tastings, cooking demonstrations, and insights into the royal spice trade history.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2 hours',
      price: 1800,
      maxGuests: 20,
      includes: ['Spice tastings', 'Historical presentation', 'Spice kit', 'Light refreshments'],
      highlights: [
        'Rare spice varieties',
        'Historical spice trade stories',
        'Blending techniques',
        'Take-home spice collection'
      ],
      chef: 'Chef Vikram Khanna',
      location: 'Heritage Spice Library'
    }
  ];

  const cuisineCategories = [
    { id: 'all', name: 'All Cuisines', icon: Utensils },
    { id: 'royal', name: 'Royal Rajasthani', icon: Crown },
    { id: 'indian', name: 'Pan-Indian', icon: Star },
    { id: 'multi', name: 'Multi-Cuisine', icon: Wine },
    { id: 'beverages', name: 'Beverages & Light Bites', icon: Coffee }
  ];

  const filteredRestaurants = cuisineFilter === 'all' 
    ? restaurants 
    : restaurants.filter(restaurant => {
        if (cuisineFilter === 'royal') return restaurant.cuisine === 'Royal Rajasthani';
        if (cuisineFilter === 'indian') return restaurant.cuisine === 'Pan-Indian';
        if (cuisineFilter === 'multi') return restaurant.cuisine === 'Multi-Cuisine';
        if (cuisineFilter === 'beverages') return restaurant.cuisine === 'Light Bites & Beverages';
        return true;
      });

  const renderSpiceLevel = (level: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full mr-1 ${
              i < level ? 'bg-red-500' : 'bg-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {level === 0 ? 'Mild' : level <= 2 ? 'Medium' : level <= 3 ? 'Spicy' : 'Very Spicy'}
        </span>
      </div>
    );
  };

  return (
    <section id="dining" className="heritage-section bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-royal-gold/10 border border-royal-gold/30 rounded-full px-6 py-2 mb-6">
            <ChefHat className="w-5 h-5 text-royal-gold" />
            <span className="text-royal-gold font-semibold">Culinary Heritage</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black royal-text-gradient mb-6 text-shadow-royal">
            Royal Dining Experience
          </h2>
          <div className="heritage-divider mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Embark on a culinary journey through <span className="font-bold text-royal-maroon">135 years of royal gastronomy</span>, 
            where traditional recipes meet contemporary excellence in our heritage restaurants and exclusive dining experiences.
          </p>
        </div>

        {/* Royal Kitchen Heritage Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 animate-slide-up">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Crown className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Royal Kitchen Legacy</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The royal kitchens of Heritage Royale have been the heart of culinary excellence since 1890. Under the patronage of 
              <strong> Maharaja Vikram Singh</strong>, master chefs from across India were invited to create a unique fusion of 
              regional cuisines that would define royal hospitality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our heritage recipes, passed down through seven generations of royal chefs, use traditional cooking methods, 
              rare spices from the royal spice gardens, and time-honored techniques that create flavors worthy of royalty. 
              Today, we continue this legacy with modern interpretations that honor our culinary heritage.
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-gold">135+</div>
                <div className="text-sm text-gray-600">Years of Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-gold">4</div>
                <div className="text-sm text-gray-600">Heritage Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-gold">50+</div>
                <div className="text-sm text-gray-600">Signature Dishes</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Royal Kitchen Heritage"
              className="w-full h-96 object-cover rounded-xl shadow-heritage"
            />
            <div className="absolute inset-0 bg-royal-gradient/20 rounded-xl"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm font-semibold text-royal-maroon">
                "Food is the thread that weaves cultures together"
              </p>
              <p className="text-xs text-gray-600">- Royal Kitchen Philosophy</p>
            </div>
          </div>
        </div>

        {/* Cuisine Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cuisineCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setCuisineFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 animate-fade-in ${
                cuisineFilter === category.id
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

        {/* Restaurants Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Utensils className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Heritage Restaurants</h3>
            </div>
            <p className="text-lg text-gray-600">Four distinct dining experiences in heritage settings</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredRestaurants.map((restaurant, index) => (
              <Card
                key={restaurant.id}
                className="group cursor-pointer overflow-hidden animate-fade-in"
                padding="none"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedRestaurant(restaurant)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-royal-gradient/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {restaurant.cuisine}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-royal-maroon text-white px-3 py-1 rounded-full text-sm font-bold">
                      {restaurant.priceRange}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Utensils className="w-8 h-8 text-royal-gold mx-auto mb-2" />
                      <p className="text-royal-maroon font-semibold">View Menu</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif font-bold text-xl text-royal-maroon line-clamp-2">
                      {restaurant.name}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <ChefHat className="w-4 h-4 mr-2 text-royal-gold" />
                      {restaurant.chef}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-royal-gold" />
                      {restaurant.timings}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-royal-gold" />
                      {restaurant.capacity} guests • {restaurant.dressCode}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-royal-gold" />
                      {restaurant.ambiance}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {restaurant.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {restaurant.signatureDishes.slice(0, 2).map((dish, idx) => (
                      <span key={idx} className="bg-heritage-50 px-3 py-1 rounded-full text-sm text-royal-maroon">
                        {dish}
                      </span>
                    ))}
                    {restaurant.signatureDishes.length > 2 && (
                      <span className="bg-royal-gold/10 px-3 py-1 rounded-full text-sm text-royal-gold font-semibold">
                        +{restaurant.signatureDishes.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedRestaurant(restaurant);
                      }}
                      variant="outline"
                      className="flex-1"
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsReservationOpen(true);
                      }}
                      className="flex-1"
                    >
                      {restaurant.reservationRequired ? 'Reserve Table' : 'Visit Now'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Signature Dishes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Award className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Signature Dishes</h3>
            </div>
            <p className="text-lg text-gray-600">Culinary masterpieces with royal heritage stories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureDishes.map((dish, index) => (
              <Card
                key={dish.id}
                className="group cursor-pointer overflow-hidden animate-fade-in"
                padding="none"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedDish(dish)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-royal-gradient/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    {dish.chefSpecial && (
                      <span className="bg-royal-crimson text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Chef's Special
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                      ₹{dish.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <BookOpen className="w-8 h-8 text-royal-gold mx-auto mb-2" />
                      <p className="text-royal-maroon font-semibold">Read Story</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg text-royal-maroon mb-2 line-clamp-2">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{dish.restaurant}</p>
                  
                  <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                    {dish.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Preparation:</span>
                      <span className="font-semibold">{dish.preparationTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Spice Level:</span>
                      {renderSpiceLevel(dish.spiceLevel)}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {dish.dietary.map((diet, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {diet}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDish(dish);
                    }}
                    variant="outline"
                    className="w-full"
                    icon={BookOpen}
                  >
                    Cultural Story
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Dining Experiences */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Star className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Exclusive Dining Experiences</h3>
            </div>
            <p className="text-lg text-gray-600">Private dining and culinary masterclasses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diningExperiences.map((experience, index) => (
              <Card
                key={experience.id}
                className="group cursor-pointer text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedExperience(experience)}
              >
                <div className="relative mb-4">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-royal-gradient/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-royal-maroon text-white px-2 py-1 rounded text-xs font-bold capitalize">
                      {experience.type}
                    </span>
                  </div>
                </div>
                
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">
                  {experience.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">with {experience.chef}</p>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>{experience.duration}</span>
                  <span className="font-bold text-royal-maroon">₹{experience.price.toLocaleString()}</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  Max {experience.maxGuests} guests • {experience.location}
                </div>
                
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedExperience(experience);
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

        {/* Culinary Heritage CTA */}
        <div className="text-center">
          <Card className="bg-royal-gradient p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-heritage-pattern opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Crown className="w-10 h-10" />
                <h3 className="text-3xl font-serif font-bold">Complete Culinary Journey</h3>
              </div>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Combine your stay with our comprehensive culinary package including cooking classes, 
                chef's table experiences, and exclusive access to our heritage spice collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  icon={ChefHat}
                  className="border-white text-white hover:bg-white hover:text-royal-maroon font-bold"
                >
                  Culinary Package
                </Button>
                <Button
                  onClick={() => setIsReservationOpen(true)}
                  variant="ghost"
                  size="lg"
                  icon={Calendar}
                  className="text-white hover:bg-white/20 font-bold"
                >
                  Make Reservation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Restaurant Details Modal */}
      {selectedRestaurant && (
        <Modal
          isOpen={!!selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
          title={selectedRestaurant.name}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedRestaurant.image}
              alt={selectedRestaurant.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Restaurant Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">Cuisine:</span>
                    <span>{selectedRestaurant.cuisine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Chef:</span>
                    <span>{selectedRestaurant.chef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Timings:</span>
                    <span>{selectedRestaurant.timings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Capacity:</span>
                    <span>{selectedRestaurant.capacity} guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Price Range:</span>
                    <span>{selectedRestaurant.priceRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Dress Code:</span>
                    <span>{selectedRestaurant.dressCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Reservations:</span>
                    <span>{selectedRestaurant.reservationRequired ? 'Required' : 'Walk-ins Welcome'}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Highlights</h4>
                <ul className="space-y-2 mb-6">
                  {selectedRestaurant.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Signature Dishes</h4>
                <ul className="space-y-2">
                  {selectedRestaurant.signatureDishes.map((dish, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{dish}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-heritage-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong>Ambiance:</strong> {selectedRestaurant.ambiance}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Specialty:</strong> {selectedRestaurant.specialty}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                {selectedRestaurant.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={() => setIsReservationOpen(true)}
                className="flex-1"
                icon={Calendar}
              >
                {selectedRestaurant.reservationRequired ? 'Make Reservation' : 'Visit Restaurant'}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Dish Details Modal */}
      {selectedDish && (
        <Modal
          isOpen={!!selectedDish}
          onClose={() => setSelectedDish(null)}
          title={selectedDish.name}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedDish.image}
              alt={selectedDish.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Dish Information</h4>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold">Restaurant:</span>
                    <span>{selectedDish.restaurant}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Price:</span>
                    <span className="font-bold text-royal-maroon">₹{selectedDish.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Preparation Time:</span>
                    <span>{selectedDish.preparationTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Spice Level:</span>
                    {renderSpiceLevel(selectedDish.spiceLevel)}
                  </div>
                </div>
                
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-3">Key Ingredients</h4>
                <ul className="space-y-1 mb-6">
                  {selectedDish.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-3 h-3 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{ingredient}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-3">Dietary Information</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDish.dietary.map((diet, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {diet}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Cultural Heritage Story</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedDish.culturalStory}
                </p>
                
                {selectedDish.chefSpecial && (
                  <div className="bg-royal-gold/10 border border-royal-gold/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <Award className="w-5 h-5 text-royal-gold mr-2" />
                      <span className="font-semibold text-royal-maroon">Chef's Special</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      This signature dish represents the pinnacle of our culinary heritage and is personally crafted by our head chef.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-heritage-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {selectedDish.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={() => setIsReservationOpen(true)}
                className="flex-1"
                icon={Calendar}
              >
                Order This Dish - ₹{selectedDish.price.toLocaleString()}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Dining Experience Details Modal */}
      {selectedExperience && (
        <Modal
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          title={selectedExperience.title}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedExperience.image}
              alt={selectedExperience.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Experience Details</h4>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold">Type:</span>
                    <span className="capitalize">{selectedExperience.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Chef:</span>
                    <span>{selectedExperience.chef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Duration:</span>
                    <span>{selectedExperience.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Location:</span>
                    <span>{selectedExperience.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Max Guests:</span>
                    <span>{selectedExperience.maxGuests} people</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-royal-maroon border-t pt-2">
                    <span>Price:</span>
                    <span>₹{selectedExperience.price.toLocaleString()}</span>
                  </div>
                </div>
                
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-3">What's Included</h4>
                <ul className="space-y-2">
                  {selectedExperience.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Experience Highlights</h4>
                <ul className="space-y-2">
                  {selectedExperience.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-4 h-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-heritage-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {selectedExperience.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={() => setIsReservationOpen(true)}
                className="flex-1"
                icon={Calendar}
              >
                Book Experience - ₹{selectedExperience.price.toLocaleString()}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Reservation Modal */}
      <Modal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        title="Make Dining Reservation"
        size="md"
      >
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-serif font-bold text-royal-maroon mb-2">
              Reserve Your Table
            </h4>
            <p className="text-gray-600">Complete your reservation details below</p>
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
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="royal-input"
                  defaultValue="2024-03-20"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Time
                </label>
                <select className="royal-input">
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Guests
                </label>
                <select className="royal-input">
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6+ Guests</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Restaurant Preference
              </label>
              <select className="royal-input">
                <option>Maharaja's Royal Dining Hall</option>
                <option>Garden Pavilion Restaurant</option>
                <option>The Spice Route</option>
                <option>Royal Heritage Lounge</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                className="royal-input h-20 resize-none"
                placeholder="Dietary restrictions, special occasions, seating preferences..."
              />
            </div>
          </div>
          
          <div className="bg-heritage-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Estimated Cost:</span>
              <span className="text-2xl font-bold text-royal-maroon">₹3,500</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">*For 2 guests at Maharaja's Royal Dining Hall</p>
          </div>
          
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setIsReservationOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                alert('Reservation confirmed! You will receive a confirmation email shortly.');
                setIsReservationOpen(false);
              }}
              className="flex-1"
            >
              Confirm Reservation
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};