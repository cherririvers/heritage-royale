import React, { useState } from 'react';
import { Crown, Clock, Award, Users, Camera, Play, ChevronRight, Star, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  highlight?: boolean;
}

export const HeritageSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);

  const timelineEvents: TimelineEvent[] = [
    {
      year: '1890',
      title: 'Royal Foundation',
      description: 'Built by Maharaja Vikram Singh as his summer palace, featuring Indo-Saracenic architecture with intricate marble work and royal gardens.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlight: true
    },
    {
      year: '1920',
      title: 'Golden Era',
      description: 'Hosted British dignitaries and Indian royalty. The palace became a center for cultural events and diplomatic gatherings.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      year: '1947',
      title: 'Independence Legacy',
      description: 'Witnessed historic meetings during India\'s independence. The palace served as a venue for important political discussions.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      year: '1975',
      title: 'Heritage Preservation',
      description: 'Declared a heritage monument. Extensive restoration work began to preserve the original architecture and royal artifacts.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      year: '1995',
      title: 'Hotel Transformation',
      description: 'Carefully converted into a luxury heritage hotel while maintaining its royal character and historical significance.',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      year: '2024',
      title: 'Modern Heritage',
      description: 'Today, Heritage Royale continues to offer guests an authentic royal experience with modern luxury amenities.',
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlight: true
    }
  ];

  const architecturalFeatures = [
    {
      title: 'Royal Durbar Hall',
      description: 'Grand hall with 40-foot ceilings, crystal chandeliers, and hand-painted frescoes depicting royal court scenes.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Marble Courtyard',
      description: 'Central courtyard with intricate marble inlay work, featuring traditional Mughal garden design with fountains.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Heritage Library',
      description: 'Original royal library housing rare manuscripts, historical documents, and a collection of ancient texts.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Royal Gardens',
      description: 'Landscaped gardens with heritage trees, royal pavilions, and traditional water features spanning 5 acres.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <section id="heritage" className="heritage-section bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-royal-gold/10 border border-royal-gold/30 rounded-full px-6 py-2 mb-6">
            <Crown className="w-5 h-5 text-royal-gold" />
            <span className="text-royal-gold font-semibold">Since 1890</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black royal-text-gradient mb-6 text-shadow-royal">
            Our Royal Heritage
          </h2>
          <div className="heritage-divider mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Step into a world where history comes alive. Heritage Royale has been the crown jewel of Indian hospitality for over 
            <span className="font-bold text-royal-maroon"> 135 years</span>, preserving the grandeur of royal India while offering modern luxury.
          </p>
        </div>

        {/* Royal Family Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 animate-slide-up">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">The Royal Legacy</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Built by the visionary <strong>Maharaja Vikram Singh</strong> in 1890, this magnificent palace was designed as a summer retreat 
              that would showcase the finest of Indo-Saracenic architecture. The Maharaja's passion for art, culture, and hospitality 
              is woven into every corner of this heritage property.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For generations, the royal family has been dedicated to preserving India's cultural heritage. Today, their descendants 
              continue this legacy by sharing their ancestral home with guests from around the world, ensuring that the stories, 
              traditions, and grandeur of royal India live on.
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-gold">135+</div>
                <div className="text-sm text-gray-600">Years of Heritage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-gold">7</div>
                <div className="text-sm text-gray-600">Generations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-gold">50+</div>
                <div className="text-sm text-gray-600">Royal Artifacts</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Royal Family Heritage"
              className="w-full h-96 object-cover rounded-xl shadow-heritage"
            />
            <div className="absolute inset-0 bg-royal-gradient/20 rounded-xl"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm font-semibold text-royal-maroon">
                "Preserving heritage, creating memories"
              </p>
              <p className="text-xs text-gray-600">- Royal Family Motto</p>
            </div>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Heritage Timeline</h3>
            </div>
            <p className="text-lg text-gray-600">Journey through our illustrious history</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-royal-gradient rounded-full shadow-lg"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Mobile Layout - Full Width */}
                  <div className="lg:hidden">
                    <Card 
                      className={`cursor-pointer transition-all duration-300 ${event.highlight ? 'border-royal-gold bg-royal-gold/5' : ''}`}
                      onClick={() => setSelectedEvent(event)}
                      padding="lg"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                            event.highlight ? 'bg-royal-gold' : 'bg-royal-maroon'
                          }`}>
                            <span className="text-white font-bold text-sm">{event.year.slice(-2)}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-2xl font-bold text-royal-gold">{event.year}</span>
                              {event.highlight && <Star className="w-5 h-5 text-royal-gold" />}
                            </div>
                            <h4 className="font-serif font-bold text-xl text-royal-maroon">
                              {event.title}
                            </h4>
                          </div>
                        </div>
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <p className="text-gray-700 text-base leading-relaxed mb-4">
                          {event.description}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-royal-gold hover:bg-royal-gold/10"
                          icon={ChevronRight}
                          iconPosition="right"
                        >
                          Learn More
                        </Button>
                      </div>
                    </Card>
                  </div>

                  {/* Desktop Layout - Split Layout */}
                  <div className="hidden lg:flex items-center">
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <Card 
                          className={`cursor-pointer transition-all duration-300 ${event.highlight ? 'border-royal-gold bg-royal-gold/5' : ''}`}
                          onClick={() => setSelectedEvent(event)}
                          padding="lg"
                        >
                          <div className="flex flex-row items-center space-x-6">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-3xl font-bold text-royal-gold">{event.year}</span>
                                {event.highlight && <Star className="w-5 h-5 text-royal-gold" />}
                              </div>
                              <h4 className="font-serif font-bold text-xl text-royal-maroon mb-3">
                                {event.title}
                              </h4>
                              <p className="text-gray-700 text-base line-clamp-3 leading-relaxed mb-4">
                                {event.description}
                              </p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-royal-gold hover:bg-royal-gold/10"
                                icon={ChevronRight}
                                iconPosition="right"
                              >
                                Learn More
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </div>
                      
                      {/* Timeline Node */}
                      <div className="relative z-10">
                        <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg ${
                          event.highlight ? 'bg-royal-gold' : 'bg-royal-maroon'
                        }`}></div>
                      </div>
                      
                      <div className="w-5/12"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Award className="w-8 h-8 text-royal-gold" />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon">Architectural Marvels</h3>
            </div>
            <p className="text-lg text-gray-600">Discover the intricate details of our heritage architecture</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                className="group cursor-pointer overflow-hidden animate-fade-in"
                padding="none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-royal-gradient/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Virtual Tour Preview */}
        <div className="text-center">
          <Card className="bg-royal-gradient p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-heritage-pattern opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Camera className="w-10 h-10" />
                <h3 className="text-3xl font-serif font-bold">Virtual Heritage Tour</h3>
              </div>
              <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Experience our palace from anywhere in the world. Take a 360° virtual tour through our 
                heritage halls, royal chambers, and magnificent gardens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsVirtualTourOpen(true)}
                  variant="outline"
                  size="lg"
                  icon={Play}
                  className="border-white text-white hover:bg-white hover:text-royal-maroon font-bold"
                >
                  Start Virtual Tour
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  icon={MapPin}
                  className="text-white hover:bg-white/20 font-bold"
                >
                  View Floor Plans
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Timeline Event Modal */}
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={`${selectedEvent.year} - ${selectedEvent.title}`}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-lg text-gray-700 leading-relaxed">
              {selectedEvent.description}
            </p>
            <div className="bg-heritage-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                This significant period in our heritage continues to influence the character and charm of Heritage Royale today.
              </p>
            </div>
          </div>
        </Modal>
      )}

      {/* Virtual Tour Modal */}
      <Modal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        title="Virtual Heritage Tour"
        size="xl"
      >
        <div className="space-y-6">
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-600 mb-2">360° Virtual Tour</h4>
              <p className="text-gray-500">Interactive tour experience would be embedded here</p>
              <Button className="mt-4" icon={Play}>
                Launch Full Tour
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {architecturalFeatures.map((feature) => (
              <button
                key={feature.title}
                className="text-left p-3 rounded-lg border hover:border-royal-gold hover:bg-royal-gold/5 transition-colors"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-20 object-cover rounded mb-2"
                />
                <p className="text-sm font-semibold text-royal-maroon">{feature.title}</p>
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};