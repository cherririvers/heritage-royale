import React, { useState } from 'react';
import { Star, Camera, Send, User, AlertCircle, Check, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface ReviewFormProps {
  className?: string;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    guestName: '',
    email: '',
    stayDate: '',
    roomType: '',
    overallRating: 0,
    serviceRating: 0,
    cleanlinessRating: 0,
    locationRating: 0,
    valueRating: 0,
    title: '',
    review: '',
    recommend: true,
    visitPurpose: 'leisure',
    photos: [] as File[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roomTypes = [
    'Heritage Room',
    'Royal Suite',
    'Palace Chamber',
    'Maharaja Suite',
  ];

  const visitPurposes = [
    { value: 'leisure', label: 'Leisure/Vacation' },
    { value: 'business', label: 'Business Travel' },
    { value: 'wedding', label: 'Wedding/Celebration' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'family', label: 'Family Gathering' },
    { value: 'cultural', label: 'Cultural Experience' },
  ];

  const ratingCategories = [
    { key: 'overallRating', label: 'Overall Experience' },
    { key: 'serviceRating', label: 'Service Quality' },
    { key: 'cleanlinessRating', label: 'Cleanliness' },
    { key: 'locationRating', label: 'Location' },
    { key: 'valueRating', label: 'Value for Money' },
  ];

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleRatingChange = (category: string, rating: number) => {
    setFormData(prev => ({ ...prev, [category]: rating }));
    if (errors[category]) {
      setErrors(prev => ({ ...prev, [category]: '' }));
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + formData.photos.length > 5) {
      setErrors(prev => ({ ...prev, photos: 'Maximum 5 photos allowed' }));
      return;
    }
    setFormData(prev => ({ ...prev, photos: [...prev.photos, ...files] }));
    if (errors.photos) {
      setErrors(prev => ({ ...prev, photos: '' }));
    }
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.guestName.trim()) newErrors.guestName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.stayDate) newErrors.stayDate = 'Stay date is required';
    if (!formData.roomType) newErrors.roomType = 'Room type is required';
    if (formData.overallRating === 0) newErrors.overallRating = 'Overall rating is required';
    if (!formData.title.trim()) newErrors.title = 'Review title is required';
    if (!formData.review.trim()) newErrors.review = 'Review text is required';
    else if (formData.review.trim().length < 20) newErrors.review = 'Review must be at least 20 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const StarRating: React.FC<{ rating: number; onRatingChange: (rating: number) => void; error?: string }> = ({ 
    rating, 
    onRatingChange, 
    error 
  }) => (
    <div>
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className={`w-8 h-8 transition-colors ${
              star <= rating ? 'text-royal-gold' : 'text-gray-300 hover:text-royal-gold/50'
            }`}
          >
            <Star className="w-full h-full fill-current" />
          </button>
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {rating > 0 && (
            <>
              {rating}/5 
              {rating === 5 && ' - Excellent'}
              {rating === 4 && ' - Very Good'}
              {rating === 3 && ' - Good'}
              {rating === 2 && ' - Fair'}
              {rating === 1 && ' - Poor'}
            </>
          )}
        </span>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1 flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  );

  if (isSubmitted) {
    return (
      <Card className={`text-center p-8 ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-2">
          Thank You for Your Review!
        </h3>
        <p className="text-gray-600 mb-4">
          Your review has been submitted successfully and will be published after moderation.
        </p>
        <div className="bg-heritage-50 p-4 rounded-lg mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Star className="w-5 h-5 text-royal-gold fill-current" />
            <span className="font-bold text-royal-maroon">{formData.overallRating}/5 Stars</span>
          </div>
          <p className="text-sm text-gray-600">
            <strong>Review ID:</strong> RV{Date.now().toString().slice(-6)}
          </p>
        </div>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              guestName: '',
              email: '',
              stayDate: '',
              roomType: '',
              overallRating: 0,
              serviceRating: 0,
              cleanlinessRating: 0,
              locationRating: 0,
              valueRating: 0,
              title: '',
              review: '',
              recommend: true,
              visitPurpose: 'leisure',
              photos: [],
            });
          }}
          variant="outline"
        >
          Write Another Review
        </Button>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-2">
          Share Your Experience
        </h3>
        <p className="text-gray-600">Help other guests by sharing your stay experience at Heritage Royale</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Guest Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              className={`royal-input ${errors.guestName ? 'border-red-500' : ''}`}
              value={formData.guestName}
              onChange={(e) => handleInputChange('guestName', e.target.value)}
              placeholder="Enter your name"
            />
            {errors.guestName && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.guestName}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              className={`royal-input ${errors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Stay Details */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Stay Date *
            </label>
            <input
              type="date"
              className={`royal-input ${errors.stayDate ? 'border-red-500' : ''}`}
              value={formData.stayDate}
              onChange={(e) => handleInputChange('stayDate', e.target.value)}
            />
            {errors.stayDate && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.stayDate}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Room Type *
            </label>
            <select
              className={`royal-input ${errors.roomType ? 'border-red-500' : ''}`}
              value={formData.roomType}
              onChange={(e) => handleInputChange('roomType', e.target.value)}
            >
              <option value="">Select room type</option>
              {roomTypes.map((room) => (
                <option key={room} value={room}>
                  {room}
                </option>
              ))}
            </select>
            {errors.roomType && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.roomType}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Visit Purpose
            </label>
            <select
              className="royal-input"
              value={formData.visitPurpose}
              onChange={(e) => handleInputChange('visitPurpose', e.target.value)}
            >
              {visitPurposes.map((purpose) => (
                <option key={purpose.value} value={purpose.value}>
                  {purpose.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Ratings */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-lg text-royal-maroon">Rate Your Experience</h4>
          {ratingCategories.map((category) => (
            <div key={category.key} className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-700 w-1/3">
                {category.label} {category.key === 'overallRating' && '*'}
              </label>
              <div className="flex-1">
                <StarRating
                  rating={formData[category.key as keyof typeof formData] as number}
                  onRatingChange={(rating) => handleRatingChange(category.key, rating)}
                  error={errors[category.key]}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Review Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Review Title *
          </label>
          <input
            type="text"
            className={`royal-input ${errors.title ? 'border-red-500' : ''}`}
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="Summarize your experience in a few words"
            maxLength={100}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.title}
            </p>
          )}
          <p className="text-sm text-gray-500 mt-1">{formData.title.length}/100 characters</p>
        </div>

        {/* Review Text */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Review *
          </label>
          <textarea
            className={`royal-input h-32 resize-none ${errors.review ? 'border-red-500' : ''}`}
            value={formData.review}
            onChange={(e) => handleInputChange('review', e.target.value)}
            placeholder="Share details about your stay, what you liked, and any suggestions for improvement..."
            maxLength={1000}
          />
          {errors.review && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.review}
            </p>
          )}
          <p className="text-sm text-gray-500 mt-1">{formData.review.length}/1000 characters</p>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Add Photos (Optional)
          </label>
          <div className="border-2 border-dashed border-heritage-300 rounded-lg p-6 text-center">
            <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-2">Upload photos from your stay (Max 5 photos)</p>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
              className="hidden"
              id="photo-upload"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('photo-upload')?.click()}
            >
              Choose Photos
            </Button>
          </div>
          {formData.photos.length > 0 && (
            <div className="grid grid-cols-5 gap-2 mt-4">
              {formData.photos.map((photo, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-16 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
          {errors.photos && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.photos}
            </p>
          )}
        </div>

        {/* Recommendation */}
        <div>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.recommend}
              onChange={(e) => handleInputChange('recommend', e.target.checked)}
              className="w-4 h-4 text-royal-gold border-gray-300 rounded focus:ring-royal-gold"
            />
            <span className="text-sm font-semibold text-gray-700 flex items-center">
              <Heart className="w-4 h-4 mr-2 text-royal-gold" />
              I would recommend Heritage Royale to friends and family
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4"
          icon={isSubmitting ? undefined : Send}
        >
          {isSubmitting ? 'Submitting Review...' : 'Submit Review'}
        </Button>
      </form>
    </Card>
  );
};