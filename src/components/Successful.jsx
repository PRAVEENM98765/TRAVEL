// src/components/PackageBookingSuccess.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router v6

const Successful = () => {
  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  // Navigate function
  const handleGoToHome = () => {
    navigate('/'); // Navigate to the homepage or another route
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center transform transition-all duration-300 hover:scale-105">
        {/* Success Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-20 w-20 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-green-600 mt-6">Booking Successful!</h2>

        {/* Description */}
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          Your package has been successfully booked. A confirmation email will be sent to you shortly.
        </p>

        {/* Button */}
        <button
          onClick={handleGoToHome}
          className="mt-8 px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Successful;
