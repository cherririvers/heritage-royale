import React, { useState } from 'react';
import { Camera, Play, Volume2, Eye, Star, Clock, Crown, Award, MapPin, ChevronLeft, ChevronRight, Maximize, Download, Share2, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';

interface Artifact {
  id: string;
  name: string;
  category: string;
  period: string;
  description: string;
  image: string;
  audioGuide: string;
  historicalContext: string;
  significance: string;
  location: string;
  dimensions: string;
  material: string;
}

interface HistoricalPhoto {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
  photographer?: string;
  event?: string;
  location: string;
}

interface VirtualTour {
  id: string;
  title: string;
  description: string;
  duration: string;
  highlights: string[];
  thumbnail: string;
  rooms: string[];
}

export const GallerySection: React.FC = () => {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<HistoricalPhoto | null>(null);
  const [selectedTour, setSelectedTour] = useState<VirtualTour | null>(null);
  const [galleryCategory, setGalleryCategory] = useState('all');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const artifacts: Artifact[] = [
    {
      id: 'royal-throne',
      name: 'Maharaja\'s Golden Throne',
      category: 'furniture',
      period: '1890-1920',
      description: 'The original throne of Maharaja Vikram Singh, crafted from teak wood and adorned with 24-karat gold leaf work and precious gemstones.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      audioGuide: '5 minutes',
      historicalContext: 'Used during royal court sessions and important ceremonies, this throne witnessed historic decisions that shaped the region.',
      significance: 'Symbol of royal authority and craftsmanship excellence of the late 19th century.',
      location: 'Royal Durbar Hall',
      dimensions: '180cm H × 120cm W × 90cm D',
      material: 'Teak wood, 24k gold leaf, rubies, emeralds'
    },
    {
      id: 'royal-crown',
      name: 'Heritage Crown Jewels',
      category: 'jewelry',
      period: '1895',
      description: 'Exquisite crown jewels including the royal tiara, necklaces, and ceremonial ornaments worn during state functions.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      audioGuide: '7 minutes',
      historicalContext: 'Commissioned for the coronation ceremony and worn during important royal celebrations and diplomatic meetings.',
      significance: 'Represents the pinnacle of Indian jewelry craftsmanship and royal heritage.',
      location: 'Heritage Museum',
      dimensions: 'Various pieces',
      material: 'Gold, diamonds, pearls, precious stones'
    },
    {
      id: 'ancient-manuscripts',
      name: 'Royal Manuscript Collection',
      category: 'documents',
      period: '1890-1947',
      description: 'Rare collection of royal decrees, historical documents, and illuminated manuscripts chronicling the palace history.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      audioGuide: '10 minutes',
      historicalContext: 'These documents provide insights into royal administration, cultural practices, and historical events.',
      significance: 'Invaluable historical records preserving centuries of royal heritage and governance.',
      location: 'Heritage Library',
      dimensions: 'Various sizes',
      material: 'Handmade paper, natural inks, gold illumination'
    },
    {
      id: 'royal-paintings',
      name: 'Miniature Painting Gallery',
      category: 'artwork',
      period: '1900-1930',
      description: 'Collection of exquisite miniature paintings depicting royal court life, festivals, and mythological scenes.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      audioGuide: '8 minutes',
      historicalContext: 'Created by court artists, these paintings document royal lifestyle and artistic traditions of the era.',
      significance: 'Masterpieces of Rajasthani miniature painting tradition and royal patronage of arts.',
      location: 'Art Gallery Wing',
      dimensions: '15cm × 20cm average',
      material: 'Natural pigments, gold leaf, handmade paper'
    },
    {
      id: 'ceremonial-weapons',
      name: 'Royal Armory Collection',
      category: 'weapons',
      period: '1880-1920',
      description: 'Ornate ceremonial swords, daggers, and shields used in royal ceremonies and displayed as symbols of power.',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600',
      audioGuide: '6 minutes',
      historicalContext: 'These ceremonial weapons were symbols of royal authority and used in important state ceremonies.',
      significance: 'Examples of exceptional metalwork and the martial traditions of Indian royalty.',
      location: 'Royal Armory',
      dimensions: 'Various sizes',
      material: 'Damascus steel, silver inlay, precious stones'
    },
    {
      id: 'royal-textiles',
      name: 'Heritage Textile Collection',
      category: 'textiles',
      period: '1890-1940',
      description: 'Magnificent collection of royal garments, ceremonial robes, and traditional textiles with intricate embroidery.',
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600',
      audioGuide: '9 minutes',
      historicalContext: 'These textiles showcase the royal fashion and the skilled craftsmanship of traditional weavers and embroiderers.',
      significance: 'Represents the rich textile heritage and royal patronage of traditional crafts.',
      location: 'Textile Gallery',
      dimensions: 'Various garments',
      material: 'Silk, gold thread, silver zardozi, precious stones'
    }
  ];

  const historicalPhotos: HistoricalPhoto[] = [
    {
      id: 'palace-construction',
      title: 'Palace Construction 1890',
      year: '1890',
      category: 'construction',
      description: 'Rare photograph showing the construction of Heritage Royale palace with traditional building techniques.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      photographer: 'Court Photographer',
      location: 'Palace Grounds'
    },
    {
      id: 'royal-family-1920',
      title: 'Royal Family Portrait 1920',
      year: '1920',
      category: 'portraits',
      description: 'Formal portrait of Maharaja Vikram Singh with his family in the Royal Durbar Hall.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      photographer: 'Raja Deen Dayal',
      location: 'Royal Durbar Hall'
    },
    {
      id: 'independence-ceremony',
      title: 'Independence Day Celebration 1947',
      year: '1947',
      category: 'events',
      description: 'Historic photograph of the Independence Day celebration held at the palace.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      event: 'Independence Day',
      location: 'Palace Courtyard'
    },
    {
      id: 'royal-durbar-1925',
      title: 'Grand Durbar 1925',
      year: '1925',
      category: 'ceremonies',
      description: 'Magnificent royal durbar with dignitaries and nobles in attendance.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      event: 'Royal Durbar',
      location: 'Royal Durbar Hall'
    },
    {
      id: 'palace-gardens-1930',
      title: 'Royal Gardens 1930',
      year: '1930',
      category: 'architecture',
      description: 'Beautiful view of the palace gardens in their prime with traditional landscaping.',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Palace Gardens'
    },
    {
      id: 'cultural-performance-1935',
      title: 'Cultural Performance 1935',
      year: '1935',
      category: 'culture',
      description: 'Traditional dance performance in the palace courtyard during a royal celebration.',
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600',
      event: 'Royal Festival',
      location: 'Marble Courtyard'
    }
  ];

  const virtualTours: VirtualTour[] = [
    {
      id: 'complete-palace-tour',
      title: 'Complete Palace Experience',
      description: 'Comprehensive 360° tour covering all major areas of the heritage palace including private chambers.',
      duration: '45 minutes',
      highlights: [
        'Royal Durbar Hall with throne',
        'Private royal chambers',
        'Heritage library and manuscripts',
        'Palace gardens and courtyards',
        'Royal kitchen and dining areas'
      ],
      thumbnail: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
      rooms: ['Durbar Hall', 'Royal Chambers', 'Library', 'Gardens', 'Kitchen']
    },
    {
      id: 'heritage-highlights',
      title: 'Heritage Highlights Tour',
      description: 'Focused tour showcasing the most significant historical areas and artifacts of the palace.',
      duration: '25 minutes',
      highlights: [
        'Throne room and royal artifacts',
        'Historical timeline gallery',
        'Architectural marvels',
        'Heritage museum collection'
      ],
      thumbnail: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
      rooms: ['Throne Room', 'Museum', 'Gallery', 'Archives']
    },
    {
      id: 'architectural-tour',
      title: 'Architectural Marvels Tour',
      description: 'Detailed exploration of the Indo-Saracenic architecture and design elements of the palace.',
      duration: '30 minutes',
      highlights: [
        'Architectural details and craftsmanship',
        'Marble work and inlay designs',
        'Structural engineering marvels',
        'Restoration and preservation efforts'
      ],
      thumbnail: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400',
      rooms: ['Courtyards', 'Halls', 'Facades', 'Domes']
    }
  ];

  const galleryCategories = [
    { id: 'all', name: 'All Collections', icon: Star },
    { id: 'artifacts', name: 'Royal Artifacts', icon: Crown },
    { id: 'photos', name: 'Historical Photos', icon: Camera },
    { id: 'tours', name: 'Virtual Tours', icon: Play }
  ];

  const artifactCategories = [
    { id: 'all', name: 'All Artifacts' },
    { id: 'furniture', name: 'Royal Furniture' },
    { id: 'jewelry', name: 'Crown Jewels' },
    { id: 'documents', name: 'Manuscripts' },
    { id: 'artwork', name: 'Paintings' },
    { id: 'weapons', name: 'Royal Armory' },
    { id: 'textiles', name: 'Heritage Textiles' }
  ];

  const photoCategories = [
    { id: 'all', name: 'All Photos' },
    { id: 'construction', name: 'Construction' },
    { id: 'portraits', name: 'Royal Portraits' },
    { id: 'events', name: 'Historic Events' },
    { id: 'ceremonies', name: 'Ceremonies' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'culture', name: 'Cultural Events' }
  ];

  const [artifactFilter, setArtifactFilter] = useState('all');
  const [photoFilter, setPhotoFilter] = useState('all');

  const filteredArtifacts = artifactFilter === 'all' 
    ? artifacts 
    : artifacts.filter(artifact => artifact.category === artifactFilter);

  const filteredPhotos = photoFilter === 'all' 
    ? historicalPhotos 
    : historicalPhotos.filter(photo => photo.category === photoFilter);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === filteredPhotos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? filteredPhotos.length - 1 : prev - 1
    );
  };

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <section id="gallery" className="heritage-section bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-royal-gold/10 border border-royal-gold/30 rounded-full px-6 py-2 mb-6">
            <Camera className="w-5 h-5 text-royal-gold" />
            <span className="text-royal-gold font-semibold">Virtual Museum</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black royal-text-gradient mb-6 text-shadow-royal">
            Heritage Gallery
          </h2>
          <div className="heritage-divider mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Explore our extensive collection of royal artifacts, historical photographs, and immersive virtual tours that bring 
            <span className="font-bold text-royal-maroon"> 135 years of heritage</span> to life through cutting-edge technology.
          </p>
        </div>

        {/* Gallery Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setGalleryCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 animate-fade-in ${
                galleryCategory === category.id
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

        {/* Royal Artifacts Section */}
        {(galleryCategory === 'all' || galleryCategory === 'artifacts') && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Crown className="w-8 h-8 text-royal-gold" />
                <h3 className="text-3xl font-serif font-bold text-royal-maroon">Royal Artifacts</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">Discover priceless treasures from our royal collection</p>
              
              {/* Artifact Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {artifactCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setArtifactFilter(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      artifactFilter === category.id
                        ? 'bg-royal-gold text-white'
                        : 'bg-heritage-100 text-royal-maroon hover:bg-royal-gold/20'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArtifacts.map((artifact, index) => (
                <Card
                  key={artifact.id}
                  className="group cursor-pointer overflow-hidden animate-fade-in"
                  padding="none"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedArtifact(artifact)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={artifact.image}
                      alt={artifact.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-royal-gradient/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {artifact.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-royal-maroon text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Volume2 className="w-3 h-3 mr-1" />
                        {artifact.audioGuide}
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                        <Eye className="w-8 h-8 text-royal-gold mx-auto mb-2" />
                        <p className="text-royal-maroon font-semibold">Explore Artifact</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-serif font-bold text-xl text-royal-maroon line-clamp-2">
                        {artifact.name}
                      </h3>
                    </div>

                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-royal-gold" />
                        {artifact.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-royal-gold" />
                        {artifact.location}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {artifact.description}
                    </p>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedArtifact(artifact);
                      }}
                      variant="outline"
                      className="w-full"
                      icon={Eye}
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Historical Photos Section */}
        {(galleryCategory === 'all' || galleryCategory === 'photos') && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Camera className="w-8 h-8 text-royal-gold" />
                <h3 className="text-3xl font-serif font-bold text-royal-maroon">Historical Photography</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">Journey through time with rare historical photographs</p>
              
              {/* Photo Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {photoCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setPhotoFilter(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      photoFilter === category.id
                        ? 'bg-royal-gold text-white'
                        : 'bg-heritage-100 text-royal-maroon hover:bg-royal-gold/20'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, index) => (
                <Card
                  key={photo.id}
                  className="group cursor-pointer overflow-hidden animate-fade-in"
                  padding="none"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {photo.year}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                        <Maximize className="w-8 h-8 text-royal-gold mx-auto mb-2" />
                        <p className="text-royal-maroon font-semibold">View Full Size</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-serif font-bold text-lg text-royal-maroon mb-2 line-clamp-2">
                      {photo.title}
                    </h3>
                    <p className="text-gray-700 text-sm line-clamp-2 mb-3">
                      {photo.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{photo.location}</span>
                      {photo.photographer && <span>by {photo.photographer}</span>}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Virtual Tours Section */}
        {(galleryCategory === 'all' || galleryCategory === 'tours') && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Play className="w-8 h-8 text-royal-gold" />
                <h3 className="text-3xl font-serif font-bold text-royal-maroon">360° Virtual Tours</h3>
              </div>
              <p className="text-lg text-gray-600">Immersive virtual reality experience of the palace</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {virtualTours.map((tour, index) => (
                <Card
                  key={tour.id}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedTour(tour)}
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={tour.thumbnail}
                      alt={tour.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-royal-gradient/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-royal-gold" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-royal-maroon text-white px-3 py-1 rounded-full text-sm font-bold">
                        {tour.duration}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif font-bold text-xl text-royal-maroon mb-3">
                    {tour.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {tour.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-royal-maroon mb-2">Tour Highlights:</h4>
                    <ul className="space-y-1">
                      {tour.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <Star className="w-3 h-3 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                      {tour.highlights.length > 3 && (
                        <li className="text-sm text-royal-gold font-semibold">
                          +{tour.highlights.length - 3} more highlights
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTour(tour);
                    }}
                    className="w-full"
                    icon={Play}
                  >
                    Start Virtual Tour
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Featured Gallery CTA */}
        <div className="text-center">
          <Card className="bg-royal-gradient p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-heritage-pattern opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Award className="w-10 h-10" />
                <h3 className="text-3xl font-serif font-bold">Complete Heritage Experience</h3>
              </div>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Combine your stay with our comprehensive heritage package including guided tours, 
                artifact exhibitions, and exclusive access to private collections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  icon={Crown}
                  className="border-white text-white hover:bg-white hover:text-royal-maroon font-bold"
                >
                  Heritage Package
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  icon={Download}
                  className="text-white hover:bg-white/20 font-bold"
                >
                  Download Gallery
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Artifact Details Modal */}
      {selectedArtifact && (
        <Modal
          isOpen={!!selectedArtifact}
          onClose={() => setSelectedArtifact(null)}
          title={selectedArtifact.name}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedArtifact.image}
              alt={selectedArtifact.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Artifact Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">Period:</span>
                    <span>{selectedArtifact.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Location:</span>
                    <span>{selectedArtifact.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Dimensions:</span>
                    <span>{selectedArtifact.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Material:</span>
                    <span>{selectedArtifact.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Audio Guide:</span>
                    <span>{selectedArtifact.audioGuide}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Historical Context</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {selectedArtifact.historicalContext}
                </p>
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-2">Cultural Significance</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedArtifact.significance}
                </p>
              </div>
            </div>
            
            <div className="bg-heritage-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {selectedArtifact.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1"
                icon={Volume2}
              >
                Play Audio Guide
              </Button>
              <Button
                className="flex-1"
                icon={Share2}
              >
                Share Artifact
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Photo Lightbox Modal */}
      <Modal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        size="xl"
      >
        {filteredPhotos[currentPhotoIndex] && (
          <div className="space-y-4">
            <div className="relative">
              <img
                src={filteredPhotos[currentPhotoIndex].image}
                alt={filteredPhotos[currentPhotoIndex].title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-2">
                {filteredPhotos[currentPhotoIndex].title}
              </h3>
              <p className="text-gray-600 mb-4">
                {filteredPhotos[currentPhotoIndex].description}
              </p>
              <div className="flex justify-center gap-6 text-sm text-gray-500">
                <span>Year: {filteredPhotos[currentPhotoIndex].year}</span>
                <span>Location: {filteredPhotos[currentPhotoIndex].location}</span>
                {filteredPhotos[currentPhotoIndex].photographer && (
                  <span>Photographer: {filteredPhotos[currentPhotoIndex].photographer}</span>
                )}
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button variant="outline" icon={Download}>
                Download
              </Button>
              <Button variant="outline" icon={Share2}>
                Share
              </Button>
              <Button variant="outline" icon={Heart}>
                Add to Favorites
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Virtual Tour Modal */}
      {selectedTour && (
        <Modal
          isOpen={!!selectedTour}
          onClose={() => setSelectedTour(null)}
          title={selectedTour.title}
          size="xl"
        >
          <div className="space-y-6">
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-600 mb-2">360° Virtual Tour</h4>
                <p className="text-gray-500 mb-4">Interactive virtual reality experience would be embedded here</p>
                <Button icon={Play}>
                  Launch Full VR Experience
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Tour Information</h4>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold">Duration:</span>
                    <span>{selectedTour.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Rooms Covered:</span>
                    <span>{selectedTour.rooms.length} locations</span>
                  </div>
                </div>
                
                <h4 className="font-serif font-bold text-lg text-royal-maroon mb-3">Locations Included</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedTour.rooms.map((room, index) => (
                    <div key={index} className="bg-heritage-50 px-3 py-2 rounded text-sm text-center">
                      {room}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-xl text-royal-maroon mb-4">Tour Highlights</h4>
                <ul className="space-y-2">
                  {selectedTour.highlights.map((highlight, index) => (
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
                {selectedTour.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                className="flex-1"
                icon={Play}
              >
                Start Virtual Tour
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                icon={Download}
              >
                Download Tour Guide
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};