import React, { useState } from 'react';
import { Calendar, Users, MapPin, Star, CreditCard, User, Mail, Phone, Check, AlertCircle, Gift, Percent } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '2024-03-15',
    checkOut: '2024-03-17',
    guests: '2',
    rooms: '1',
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    promoCode: '',
    newsletter: false,
    terms: false,
  });
  const [promoApplied, setPromoApplied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const roomTypes = [
    {
      id: 'heritage-room',
      name: 'Heritage Room',
      price: 12500,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['King Size Bed', 'Heritage Decor', 'City View', 'Free WiFi']
    },
    {
      id: 'royal-suite',
      name: 'Royal Suite',
      price: 18500,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Separate Living Area', 'Palace View', 'Butler Service', 'Premium Amenities']
    },
    {
      id: 'palace-chamber',
      name: 'Palace Chamber',
      price: 25000,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Royal Furnishing', 'Private Balcony', 'Concierge Service', 'Complimentary Breakfast']
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setBookingData(prev => ({ ...prev, [field]: checked }));
  };

  const validateStep = (stepNumber: number) => {
    const newErrors: Record<string, string> = {};
    
    if (stepNumber === 3) {
      if (!bookingData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!bookingData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!bookingData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(bookingData.email)) newErrors.email = 'Invalid email format';
      if (!bookingData.phone.trim()) newErrors.phone = 'Phone number is required';
      else if (!/^\+?[\d\s-()]{10,}$/.test(bookingData.phone)) newErrors.phone = 'Invalid phone number';
    }
    
    if (stepNumber === 4) {
      if (!bookingData.terms) newErrors.terms = 'Please accept terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const applyPromoCode = () => {
    if (bookingData.promoCode.toLowerCase() === 'heritage20') {
      setPromoApplied(true);
    }
  };

  const calculateNights = () => {
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    return Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
  };

  const getSelectedRoom = () => {
    return roomTypes.find(room => room.id === bookingData.roomType);
  };

  const calculateTotal = () => {
    const selectedRoom = getSelectedRoom();
    if (!selectedRoom) return 0;
    const nights = calculateNights();
    const rooms = parseInt(bookingData.rooms);
    const subtotal = selectedRoom.price * nights * rooms;
    const discount = promoApplied ? subtotal * 0.2 : 0; // 20% discount
    const discountedSubtotal = subtotal - discount;
    const taxes = discountedSubtotal * 0.18; // 18% GST
    return { subtotal, discount, taxes, total: discountedSubtotal + taxes };
  };

  const handleSubmit = () => {
    if (!validateStep(4)) return;
    // Simulate booking confirmation
    alert('Booking confirmed! You will receive a confirmation email shortly.');
    onClose();
    setStep(1);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-2">
          Select Your Dates
        </h3>
        <p className="text-gray-600">Choose your check-in and check-out dates</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Check In
          </label>
          <input
            type="date"
            className="royal-input"
            value={bookingData.checkIn}
            onChange={(e) => handleInputChange('checkIn', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Check Out
          </label>
          <input
            type="date"
            className="royal-input"
            value={bookingData.checkOut}
            onChange={(e) => handleInputChange('checkOut', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Guests
          </label>
          <select
            className="royal-input"
            value={bookingData.guests}
            onChange={(e) => handleInputChange('guests', e.target.value)}
          >
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Rooms
          </label>
          <select
            className="royal-input"
            value={bookingData.rooms}
            onChange={(e) => handleInputChange('rooms', e.target.value)}
          >
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="3">3 Rooms</option>
          </select>
        </div>
      </div>

      <div className="bg-heritage-50 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700">Duration:</span>
          <span className="text-royal-maroon font-bold">{calculateNights()} nights</span>
        </div>
      </div>

      <Button onClick={() => setStep(2)} className="w-full py-3">
        Continue to Room Selection
      </Button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-2">
          Choose Your Room
        </h3>
        <p className="text-gray-600">Select from our heritage accommodations</p>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {roomTypes.map((room) => (
          <Card
            key={room.id}
            className={`cursor-pointer transition-all duration-200 ${
              bookingData.roomType === room.id
                ? 'border-royal-gold bg-royal-gold/5'
                : 'hover:border-royal-gold/50'
            }`}
            padding="none"
            onClick={() => handleInputChange('roomType', room.id)}
          >
            <div className="flex gap-4 p-4">
              <img
                src={room.image}
                alt={room.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif font-bold text-lg text-royal-maroon">
                    {room.name}
                  </h4>
                  <div className="text-right">
                    <div className="text-xl font-bold text-royal-maroon">
                      ₹{room.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Star className="w-3 h-3 text-royal-gold mr-1" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
          Back
        </Button>
        <Button
          onClick={() => setStep(3)}
          disabled={!bookingData.roomType}
          className="flex-1"
        >
          Continue to Details
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-2">
          Guest Details
        </h3>
        <p className="text-gray-600">Please provide your information</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            className="royal-input"
            value={bookingData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            placeholder="Enter first name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="royal-input"
            value={bookingData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            placeholder="Enter last name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          className="royal-input"
          value={bookingData.email}
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

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          className="royal-input"
          value={bookingData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="+91 98765 43210"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Special Requests (Optional)
        </label>
        <textarea
          className="royal-input h-24 resize-none"
          value={bookingData.specialRequests}
          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
          placeholder="Any special requirements or requests..."
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Promo Code (Optional)
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            className="royal-input flex-1"
            value={bookingData.promoCode}
            onChange={(e) => handleInputChange('promoCode', e.target.value)}
            placeholder="Enter promo code"
          />
          <Button
            onClick={applyPromoCode}
            variant="outline"
            size="sm"
            disabled={promoApplied}
            icon={promoApplied ? Check : Gift}
          >
            {promoApplied ? 'Applied' : 'Apply'}
          </Button>
        </div>
        {promoApplied && (
          <p className="text-green-600 text-sm mt-1 flex items-center">
            <Check className="w-4 h-4 mr-1" />
            20% discount applied successfully!
          </p>
        )}
      </div>

      <div className="space-y-3">
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={bookingData.newsletter}
            onChange={(e) => handleCheckboxChange('newsletter', e.target.checked)}
            className="mt-1 w-4 h-4 text-royal-gold border-gray-300 rounded focus:ring-royal-gold"
          />
          <span className="text-sm text-gray-700">
            Subscribe to our newsletter for exclusive offers and heritage updates
          </span>
        </label>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
          Back
        </Button>
        <Button
          onClick={() => setStep(4)}
          onClick={() => {
            if (validateStep(3)) {
              setStep(4);
            }
          }}
          className="flex-1"
        >
          Review Booking
        </Button>
      </div>
    </div>
  );

  const renderStep4 = () => {
    const selectedRoom = getSelectedRoom();
    const nights = calculateNights();
    const rooms = parseInt(bookingData.rooms);
    const pricing = calculateTotal();

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-2">
            Booking Summary
          </h3>
          <p className="text-gray-600">Please review your booking details</p>
        </div>

        <Card className="bg-heritage-50" padding="md">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">Guest:</span>
              <span>{bookingData.firstName} {bookingData.lastName}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Email:</span>
              <span>{bookingData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Phone:</span>
              <span>{bookingData.phone}</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Check-in:</span>
                <span>{new Date(bookingData.checkIn).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Check-out:</span>
                <span>{new Date(bookingData.checkOut).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Duration:</span>
                <span>{nights} nights</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Room:</span>
                <span>{selectedRoom?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Guests:</span>
                <span>{bookingData.guests} Adults, {bookingData.rooms} Room(s)</span>
              </div>
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Room charges:</span>
                <span>₹{pricing.subtotal.toLocaleString()}</span>
              </div>
              {pricing.discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount (20%):</span>
                  <span>-₹{pricing.discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Taxes (18% GST):</span>
                <span>₹{pricing.taxes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-royal-maroon border-t pt-2">
                <span>Total Amount:</span>
                <span>₹{pricing.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={bookingData.terms}
              onChange={(e) => handleCheckboxChange('terms', e.target.checked)}
              className={`mt-1 w-4 h-4 text-royal-gold border-gray-300 rounded focus:ring-royal-gold ${
                errors.terms ? 'border-red-500' : ''
              }`}
            />
            <span className="text-sm text-gray-700">
              I agree to the <a href="#" className="text-royal-gold hover:underline">Terms & Conditions</a> and 
              <a href="#" className="text-royal-gold hover:underline ml-1">Privacy Policy</a>
            </span>
          </label>
          {errors.terms && (
            <p className="text-red-500 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.terms}
            </p>
          )}
        </div>

        <div className="flex gap-4">
          <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
            Back
          </Button>
          <Button onClick={handleSubmit} className="flex-1">
            Confirm Booking
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <div className="min-h-[500px]">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3, 4].map((stepNumber) => (
            <React.Fragment key={stepNumber}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= stepNumber
                  ? 'bg-royal-gold text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div className={`w-12 h-1 ${
                  step > stepNumber ? 'bg-royal-gold' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step Content */}
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </div>
    </Modal>
  );
};