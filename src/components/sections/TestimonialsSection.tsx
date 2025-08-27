import React, { useState } from 'react';
import { Star, Quote, Camera, Award, Users, Calendar, ChevronLeft, ChevronRight, Play, Heart, Shield, Crown, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  title: string;
  review: string;
  date: string;
  roomType: string;
  visitPurpose: string;
  image: string;
  verified: boolean;
  featured: boolean;
}

interface CelebrityGuest {
  id: string;
  name: string;
  title: string;
  quote: string;
  image: string;
  visitYear: string;
  occasion: string;
}

interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  image: string;
  category: string;
}

export const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 'guest-1',
      name: 'Priya & Rajesh Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      title: 'A Royal Experience Beyond Expectations',
      review: 'Our stay at Heritage Royale was absolutely magical! From the moment we entered the palace, we felt like royalty. The heritage rooms are beautifully decorated with authentic artifacts, and the staff treated us with such warmth and respect. The cultural performances in the evening were mesmerizing, and the royal dining experience was unforgettable. We celebrated our 10th anniversary here, and it truly made our special day even more memorable.',
      date: '2024-02-15',
      roomType: 'Royal Suite',
      visitPurpose: 'Anniversary',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      featured: true
    },
    {
      id: 'guest-2',
      name: 'James & Sarah Wilson',
      location: 'London, United Kingdom',
      rating: 5,
      title: 'Authentic Indian Heritage at Its Finest',
      review: 'As international travelers, we\'ve stayed in many luxury hotels, but Heritage Royale stands out for its authentic cultural experience. The heritage walk with the expert guide was incredibly informative, and we learned so much about Indian royal history. The cooking masterclass was a highlight - we still make the royal dal recipe at home! The palace architecture is breathtaking, and every corner tells a story. Highly recommend for anyone wanting to experience true Indian hospitality.',
      date: '2024-01-28',
      roomType: 'Palace Chamber',
      visitPurpose: 'Cultural Tourism',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      featured: true
    },
    {
      id: 'guest-3',
      name: 'Dr. Anita Gupta',
      location: 'Delhi, India',
      rating: 5,
      title: 'Perfect Venue for Corporate Retreats',
      review: 'We organized our company\'s annual leadership retreat at Heritage Royale, and it exceeded all expectations. The Royal Durbar Hall provided a magnificent setting for our meetings, and the business center had all modern amenities. The team-building activities in the heritage gardens were unique and engaging. The staff was incredibly professional in handling our group of 50 executives. The combination of luxury, heritage, and modern facilities made it perfect for business.',
      date: '2024-02-08',
      roomType: 'Heritage Rooms',
      visitPurpose: 'Corporate Event',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      featured: false
    },
    {
      id: 'guest-4',
      name: 'Vikram & Meera Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      title: 'Dream Wedding Destination',
      review: 'We had our dream wedding at Heritage Royale, and it was absolutely perfect! The marble courtyard looked stunning with traditional decorations, and the royal gardens provided a beautiful backdrop for photos. The wedding planning team was exceptional - they took care of every detail from catering to entertainment. Our guests are still talking about the royal feast and the folk dance performances. It truly felt like a royal celebration worthy of a Maharaja!',
      date: '2024-01-20',
      roomType: 'Maharaja Suite',
      visitPurpose: 'Wedding',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      featured: true
    },
    {
      id: 'guest-5',
      name: 'Maria Rodriguez',
      location: 'Barcelona, Spain',
      rating: 5,
      title: 'Incredible Solo Travel Experience',
      review: 'As a solo female traveler, I felt completely safe and welcomed at Heritage Royale. The concierge team helped me plan my entire Jaipur itinerary, and the cultural guide was knowledgeable and friendly. The heritage spa treatments were incredibly relaxing after long days of sightseeing. The miniature painting workshop was a wonderful experience - I still have my artwork as a beautiful memory. The staff made me feel like part of the royal family!',
      date: '2024-02-03',
      roomType: 'Heritage Room',
      visitPurpose: 'Solo Travel',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      featured: false
    },
    {
      id: 'guest-6',
      name: 'Ravi & Sunita Agarwal',
      location: 'Bangalore, Karnataka',
      rating: 5,
      title: 'Multi-Generational Family Perfect Stay',
      review: 'We visited with three generations of our family - grandparents, parents, and children. Heritage Royale accommodated everyone beautifully! The kids loved the heritage treasure hunt, while grandparents enjoyed the classical music evenings. The royal high tea was a hit with everyone. The interconnected heritage rooms were perfect for our large family. The staff was patient and helpful with our elderly family members. A truly memorable family reunion!',
      date: '2024-01-15',
      roomType: 'Heritage Rooms',
      visitPurpose: 'Family Reunion',
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      featured: false
    }
  ];

  const celebrityGuests: CelebrityGuest[] = [
    {
      id: 'celebrity-1',
      name: 'Amitabh Bachchan',
      title: 'Bollywood Legend',
      quote: 'Heritage Royale preserves the grandeur of Indian royalty with unmatched elegance. A truly magnificent experience.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=300',
      visitYear: '2023',
      occasion: 'Film Promotion Event'
    },
    {
      id: 'celebrity-2',
      name: 'Deepika Padukone',
      title: 'International Film Star',
      quote: 'The authentic heritage experience at Heritage Royale is breathtaking. Every moment feels like stepping into royal history.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=300',
      visitYear: '2023',
      occasion: 'Magazine Photoshoot'
    },
    {
      id: 'celebrity-3',
      name: 'Ratan Tata',
      title: 'Business Icon',
      quote: 'Heritage Royale exemplifies the perfect blend of tradition and modern luxury. A testament to Indian hospitality.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=300',
      visitYear: '2022',
      occasion: 'Business Summit'
    }
  ];

  const awards: Award[] = [
    {
      id: 'award-1',
      title: 'Best Heritage Hotel in India',
      organization: 'Travel + Leisure India',
      year: '2024',
      description: 'Recognized for exceptional preservation of cultural heritage and authentic royal hospitality experience.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Heritage'
    },
    {
      id: 'award-2',
      title: 'Excellence in Cultural Tourism',
      organization: 'Ministry of Tourism, India',
      year: '2024',
      description: 'Awarded for outstanding contribution to promoting Indian cultural heritage through immersive experiences.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Tourism'
    },
    {
      id: 'award-3',
      title: 'Luxury Hotel of the Year',
      organization: 'Conde Nast Traveller',
      year: '2023',
      description: 'Honored for exceptional luxury service standards and authentic royal hospitality in heritage setting.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Luxury'
    },
    {
      id: 'award-4',
      title: 'Heritage Conservation Excellence',
      organization: 'Archaeological Survey of India',
      year: '2023',
      description: 'Recognized for exemplary conservation efforts in preserving 19th-century palace architecture and artifacts.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Conservation'
    },
    {
      id: 'award-5',
      title: 'Sustainable Tourism Leader',
      organization: 'World Travel & Tourism Council',
      year: '2023',
      description: 'Awarded for implementing sustainable practices while maintaining authentic heritage experiences.',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Sustainability'
    },
    {
      id: 'award-6',
      title: 'Best Wedding Destination',
      organization: 'WeddingSutra Awards',
      year: '2024',
      description: 'Celebrated as the premier destination for royal weddings and luxury celebrations in Rajasthan.',
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Events'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const currentReview = featuredTestimonials[currentTestimonial % featuredTestimonials.length];

  return (
    <section id="testimonials" className="heritage-section bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-royal-gold/10 border border-royal-gold/30 rounded-full px-6 py-2 mb-6">
            <Heart className="w-5 h-5 text-royal-gold" />
            <span className="text-royal-gold font-semibold">Guest Experiences</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black royal-text-gradient mb-6 text-shadow-royal">
            Guest Stories & Recognition
          </h2>
          <div className="heritage-divider mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover why guests from around the world choose Heritage Royale for their most 
            <span className="font-bold text-royal-maroon"> special moments</span> and memorable experiences. 
            Our commitment to excellence has earned recognition from prestigious organizations worldwide.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Quote className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Featured Guest Stories</h3>
            </div>
            <p className="text-lg text-gray-600">Authentic experiences from our valued guests</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-royal-gradient text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-heritage-pattern opacity-20"></div>
              <div className="relative z-10 p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={prevTestimonial}
                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="text-center flex-1 mx-8">
                    <div className="flex items-center justify-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-6 h-6 text-yellow-300 fill-current" />
                      ))}
                    </div>
                    <h4 className="text-2xl font-serif font-bold mb-2">{currentReview.title}</h4>
                    <div className="flex items-center justify-center space-x-4 text-sm opacity-90">
                      <span>{currentReview.name}</span>
                      <span>•</span>
                      <span>{currentReview.location}</span>
                      <span>•</span>
                      <span>{currentReview.roomType}</span>
                    </div>
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                
                <blockquote className="text-xl leading-relaxed text-center mb-8 italic">
                  "{currentReview.review.substring(0, 200)}..."
                </blockquote>
                
                <div className="text-center">
                  <Button
                    onClick={() => setSelectedTestimonial(currentReview)}
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-royal-maroon"
                  >
                    Read Full Review
                  </Button>
                </div>
              </div>
            </Card>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-royal-gold' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Guest Reviews */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-royal-maroon mb-4">All Guest Reviews</h3>
            <p className="text-lg text-gray-600">Read more authentic experiences from our guests</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-royal-gradient rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-royal-maroon">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                      <Shield className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-green-600 font-semibold">Verified</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= testimonial.rating ? 'text-royal-gold fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </span>
                </div>

                <h5 className="font-serif font-bold text-lg text-royal-maroon mb-3 line-clamp-2">
                  {testimonial.title}
                </h5>

                <p className="text-gray-700 mb-4 line-clamp-4">
                  {testimonial.review}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{testimonial.roomType}</span>
                  <span>{testimonial.visitPurpose}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Celebrity Guests */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Crown className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Distinguished Guests</h3>
            </div>
            <p className="text-lg text-gray-600">Celebrated personalities who have experienced our royal hospitality</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {celebrityGuests.map((celebrity, index) => (
              <Card
                key={celebrity.id}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={celebrity.image}
                  alt={celebrity.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-1">
                  {celebrity.name}
                </h4>
                <p className="text-royal-gold font-semibold mb-4">{celebrity.title}</p>
                <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                  "{celebrity.quote}"
                </blockquote>
                <div className="text-sm text-gray-600">
                  <p>{celebrity.occasion} • {celebrity.visitYear}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Award className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Awards & Recognition</h3>
            </div>
            <p className="text-lg text-gray-600">Honored by prestigious organizations for excellence in hospitality</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card
                key={award.id}
                className="text-center group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedAward(award)}
              >
                <div className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">
                  {award.title}
                </h4>
                <p className="text-royal-gold font-semibold mb-2">{award.organization}</p>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {award.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-royal-maroon">{award.year}</span>
                  <span className="text-xs bg-heritage-100 px-2 py-1 rounded-full text-royal-maroon">
                    {award.category}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="text-center">
          <Card className="bg-heritage-50 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Camera className="w-10 h-10 text-royal-gold" />
                  <h3 className="text-3xl font-serif font-bold text-royal-maroon">Video Testimonials</h3>
                </div>
                <p className="text-xl mb-6 leading-relaxed text-gray-700">
                  Watch our guests share their unforgettable experiences at Heritage Royale. 
                  From royal weddings to cultural immersions, hear firsthand about the magic 
                  that makes every stay extraordinary.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center mb-6">
                  <div>
                    <div className="text-3xl font-bold text-royal-maroon mb-1">4.9</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-royal-maroon mb-1">2,500+</div>
                    <div className="text-sm text-gray-600">Happy Guests</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-royal-maroon mb-1">98%</div>
                    <div className="text-sm text-gray-600">Recommend Us</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-royal-maroon mb-1">50+</div>
                    <div className="text-sm text-gray-600">Awards Won</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Video Testimonials"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg hover:bg-black/50 transition-colors"
                  >
                    <div className="bg-white rounded-full p-4 hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-royal-gold" />
                    </div>
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Watch guest stories and experiences
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Testimonial Detail Modal */}
      {selectedTestimonial && (
        <Modal
          isOpen={!!selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
          title="Guest Review"
          size="lg"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-royal-maroon">
                    {selectedTestimonial.name}
                  </h3>
                  <p className="text-gray-600">{selectedTestimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= selectedTestimonial.rating ? 'text-royal-gold fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {selectedTestimonial.verified && (
                <div className="flex items-center space-x-2 bg-green-100 px-3 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600 font-semibold">Verified Guest</span>
                </div>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <span className="font-semibold text-gray-700">Stay Date:</span>
                <span className="ml-2">{new Date(selectedTestimonial.date).toLocaleDateString()}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Room Type:</span>
                <span className="ml-2">{selectedTestimonial.roomType}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Visit Purpose:</span>
                <span className="ml-2">{selectedTestimonial.visitPurpose}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Rating:</span>
                <span className="ml-2">{selectedTestimonial.rating}/5 Stars</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-xl text-royal-maroon mb-3">
                {selectedTestimonial.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {selectedTestimonial.review}
              </p>
            </div>
            
            <div className="bg-heritage-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600">
                This review was verified through our guest authentication system
              </p>
            </div>
          </div>
        </Modal>
      )}

      {/* Award Detail Modal */}
      {selectedAward && (
        <Modal
          isOpen={!!selectedAward}
          onClose={() => setSelectedAward(null)}
          title={selectedAward.title}
          size="md"
        >
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-2">
                {selectedAward.title}
              </h3>
              <p className="text-royal-gold font-semibold text-lg">{selectedAward.organization}</p>
              <p className="text-gray-600">{selectedAward.year}</p>
            </div>
            
            <div className="bg-heritage-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-center">
                {selectedAward.description}
              </p>
            </div>
            
            <div className="text-center">
              <span className="bg-royal-gold text-white px-4 py-2 rounded-full text-sm font-semibold">
                {selectedAward.category} Excellence
              </span>
            </div>
          </div>
        </Modal>
      )}

      {/* Video Modal */}
      <Modal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title="Guest Video Testimonials"
        size="xl"
      >
        <div className="space-y-6">
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-600 mb-2">Video Testimonials</h4>
              <p className="text-gray-500">Guest video experiences would be embedded here</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {testimonials.slice(0, 3).map((testimonial) => (
              <button
                key={testimonial.id}
                className="text-left p-3 rounded-lg border hover:border-royal-gold hover:bg-royal-gold/5 transition-colors"
              >
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-20 object-cover rounded mb-2"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-royal-maroon">{testimonial.name}</p>
                <p className="text-xs text-gray-600">{testimonial.title}</p>
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};